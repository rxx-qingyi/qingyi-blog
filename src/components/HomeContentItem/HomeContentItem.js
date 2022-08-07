import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tag ,Card} from 'antd';
import { useHistory } from 'react-router-dom';
import notes from '../../assets/images/cover/notes.jpg'
import algorithm from '../../assets/images/cover/algorithm.jpg'

import './HomeContentItem.less';
import { CATEGORY_COLORS } from '../../utils/constants';
import { UPDATE_MENU_KEY } from '../../store/types';

const HomeContentItem = ({ dispatch, ownProps }) => {
  console.log(dispatch);
  const { Meta } = Card;
  const history = useHistory();
  const info = ownProps.info;
  const goArticleDetail = (id) => {
    dispatch({ type: UPDATE_MENU_KEY, data: 'article' });
    history.push(`/article/${id}`);
  };

  const cover = (info) => {
    switch (info.category) {
      case 'notes':
        return notes
        // break;
      case 'algorithm':
        return algorithm
        // break;
      default:
        break;
    }
  }
  
  const getColor = (info) => {
    switch (info.category) {
      case 'notes':
        return 'green'
      case 'algorithm':
        return 'blue'
      default:
        break;
    }
  }

  return (
  <div 
  className='home-content-item-container'
  >
    <Card
    hoverable
    onClick={() => goArticleDetail(info.id)}
    // type='inner'
    bodyStyle={{height:'150px'}}
    cover={<img alt="example" src={cover(info)} />}
    actions={[<Tag color={getColor(info)}>{info.category}</Tag>]}
    >
      <Meta title={info.title} description={info.desc} />
    </Card>
  </div>
  );
};

HomeContentItem.propTypes = {
  info: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ownProps,
  };
};

export default connect(mapDispatchToProps)(HomeContentItem);
