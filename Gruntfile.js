module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt);

  // ===========================================================================
  // RUN GRUNT TASKS ========================================================
  // ===========================================================================
  grunt.registerTask('serve',[]);

};
