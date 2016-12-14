import { connect } from 'react-redux';
import ResourceLinks from '../components/FeedbackTool/ResourceLinks';

const mapStateToProps = (state, props) => {
  return {resourceLinks: props.resourceLinks.map(x => state.resourceLinks.find(y => y.id === x))};
};
export default connect(mapStateToProps)(ResourceLinks);


