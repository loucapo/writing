IMAGENAME=sls_course_builder_api
CONTAINERNAME=sls_course_builder_api

clone-course-builder:
	git clone git@bitbucket.org:mnv_tech/sls_course_builder_api.git ../sls_course_builder_api

clone-front-end:
	git clone git@bitbucket.org:mnv_tech/eco_frontend.git ../eco_frontend

clone-repos:	clone-course-builder clone-front-end

docker-build-node:
	docker build -t eco_node -f nodeDocker/Dockerfile ./nodeDocker

docker-build-course-builder:	docker-build-node
	cd ../sls_course_builder_api && $(MAKE) docker-build
	cd ../compose_sls_system

docker-build-front-end:	docker-build-node
	cd ../eco_frontend && $(MAKE) docker-build
	cd ../compose_sls_system

docker-build-nginx:	docker-build-course-builder docker-build-front-end
	pwd
	docker build -t nginx_container -f docker/Dockerfile .

kill-all:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images -a -q) || echo "No more containers to remove."

kill-all-but-bases:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^eco_node -e ^nginx_container | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-all-but-node:
	docker rm -vf $$(docker ps -a -q) 2>/dev/null || echo "No more containers to remove."
	docker rmi $$(docker images | grep -v -e ^eco_node | awk '{print $3}' | sed -n '1!p') 2>/dev/null || echo "No more containers to remove."

kill-nginx:
	docker rm -vf nginx_container 2>/dev/null || echo "No more containers to remove."
	docker rmi nginx_container

kill-course-builder:
	docker rm -vf sls_course_builder_api 2>/dev/null || echo "No more containers to remove."
	docker rmi sls_course_builder_api

kill-front-end:
	docker rm -vf eco_frontend 2>/dev/null || echo "No more containers to remove."
	docker rmi eco_frontend

run:	docker-build-nginx
	docker-compose -f docker/docker-compose.yml up

#.PHONY: clean install docker-build run docker-clean docker-exec