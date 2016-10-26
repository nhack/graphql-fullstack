/**
 * Created by marius on 23/10/2016.
 */
import ListOfRecursiveArraysOrValues = _.ListOfRecursiveArraysOrValues;

export interface GraphqlType {
  def: string;
  resolvers?: any;
  dependencies?: Array<GraphqlType>;
}
