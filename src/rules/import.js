/**
 * @fileoverview Rule to enforce entire lodash library is not imported
 * @author Matt Smith
 * @copyright 2015 Matt Smith. All rights reserved.
 */

export default function(context) {
  return {
    ImportDeclaration(node) {
      if (node.source.value === 'lodash' || node.source.value === 'lodash-compat') {
        context.report(node.source, 'Importing the entire lodash library is not permitted, please import the specific functions you need');
      }
    }
  };
}
