require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数
imageDatas = (function genImageUrl(imageDatasArr) {
  for (let i = 0; i < imageDatasArr.length; i++) {
    // let singleImageData = imageDatasArr[i];
    imageDatasArr[i].imageUrl = require('../images/' + singleImageData.fileName);
  }

  return imageDatasArr;
})(imageDatas);

// imageDatas = genImageUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
        <div className="img-sec">

        </div>

        <div className="controller-nav">

        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
