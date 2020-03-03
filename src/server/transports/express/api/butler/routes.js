const controllers = require('./controllers');

module.exports = [
  /**
   * Get candidates to store the file
   * 
   * @api {post} /api/butler/get-file-storing-info
   * @apiParam {object} info
   * @apiParam {string} info.size
   * @apiParam {string} info.hash
   * @apiSuccess {object} - { candidates: ... }
   */
  { 
    name: 'getFileStoringInfo', 
    method: 'post',
    url: '/get-file-storing-info', 
    fn: controllers.getFileStoringInfo
  },

  /**
   * Get the file links
   * 
   * @api {post} /api/butler/get-file-links
   * @apiParam {string} hash - file hash
   */
  { 
    name: 'getFileLinks',
    method: 'post', 
    url: '/get-file-links', 
    fn: controllers.getFileLinks
  },

  /**
   * Remove the file
   * 
   * @api {post} /api/butler/remove-file
   * @apiParam {string} hash - file hash
   */
  { 
    name: 'removeFile',
    method: 'post', 
    url: '/remove-file',
    fn: controllers.removeFile
  }
];
