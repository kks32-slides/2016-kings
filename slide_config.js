var SLIDE_CONFIG = {
  // Slide settings
  settings: {
      title: 'Draft, kiss and tumble',
      subtitle: 'Explaining underwater landslides from a micromechanics perspective',
      // eventInfo: {
      //   title: "King's Engineering Seminar Series",
      //   date: '18/02/2013'
      // },
      useBuilds: true, // Default: true. False will turn off slide animation builds.
      usePrettify: true, // Default: true
      enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
      enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
      //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
      favIcon: 'images/theme/kings_icon.png',
      fonts: [
          'Open Sans:regular,semibold,italic,italicsemibold',
          'Source Code Pro'
      ],
      //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.

      //Workshop
      workshop: "King's Engineering Seminar Series<br/> Cambridge, UK",
  },

    // Author information
    presenters: [{
        name: 'Krishna Kumar*',
        company: 'University of Cambridge, UK',
        email: 'kks32@cam.ac.uk'
    }, {
        name: 'Prof. Kenichi Soga',
        company: 'University of California, Berkeley',
    }]
};
