### Start me up!

    git clone git@bitbucket.org:mnv_tech/wk_frontend.git
    must use node >= 4.0
    cd wk_frontend
    cp .env.example .env
    npm install
    npm start
    navigate in browser to localhost:8080

### RUN ALL THE THINGS VIA DOCKER

    [ ! -d wk_frontend ] && git clone git@bitbucket.org:mnv_tech/wk_frontend.git
    [ ! -d wk_course_builder_api ] && git clone git@bitbucket.org:mnv_tech/wk_course_builder_api.git
    cd wk_frontend && make docker-build-node docker-build
    cd dockerNginx && docker-compose up -d
    open http://localhost:10080
    open http://localhost:10080/api
