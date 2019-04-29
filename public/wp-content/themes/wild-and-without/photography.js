import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';

ImagesLoaded('#image-profile-grid', e => {
    const widget = new Masonry('#image-profile-grid', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
})
