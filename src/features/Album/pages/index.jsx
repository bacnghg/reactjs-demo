import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const  albumList = [
        {
            id: 1,
            name: 'Nhac Hoa Thinh Hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/f/f/a/c/ffacd8c074dfe9b3c70d9af587e34fad.jpg'
        },
        {
            id: 2,
            name: 'Nhac Au My Thinh Hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/3/a/6/a/3a6ae6349bb2225fe186452dc836aa07.jpg'
        },
        {
            id: 3,
            name: 'Nhac Tru tinh Thinh Hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/b/6/a/c/b6accf4b0512fe05f1bd713054cd8e86.jpg'
        },
        {
            id: 4,
            name: 'Nhac Tre Thinh Hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;