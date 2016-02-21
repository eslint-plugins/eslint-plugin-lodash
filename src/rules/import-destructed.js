/**
 * @fileoverview Rule to enforce only allowing destructuring assignment when using lodash
 * @author Richard van der Dys
 * @copyright 2015 Matt Smith. All rights reserved.
 */

const message = 'Please use the destructuring assignment when using lodash functions';

export default function(context) {
  return {
    ImportDeclaration(node) {
      if (node.source.value === 'lodash') {
        const vars = context.getDeclaredVariables(node);
        if (vars.length === 0) {
          context.report(node.source, message);
        } else {
          const names = vars[0].identifiers.map(id => id.name);
          const usingEntireLibrary = names.some(name => {
            return name === 'lodash' || name === '_';
          });
          if (usingEntireLibrary) {
            context.report(node.source, message);
          }
        }
      }
    }
  };
}
