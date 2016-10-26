/**
 * Created by marius on 21/10/2016.
 */
import {Kind} from 'graphql';

import {GraphqlType} from "./graphql-type";

const DateType: GraphqlType = {
  def: 'scalar Date',
  resolvers: {
    Date: {
      __parseValue(value) {
        return new Date(value); // value from the client
      },
      __serialize(value) {
        return value.getTime(); // value sent to the client
      },
      __parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      }
    }
  }
};

export default DateType;
