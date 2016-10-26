/**
 * Created by marius on 23/10/2016.
 */
import {GraphqlType} from "../../../commons/graphql/types/graphql-type";

const TestType: GraphqlType = {
  def: `
    interface TestQuery{
      tests: [String]
    }
  `,
  resolvers: {
    Query: {
      tests: () => ['test']
    }
  }
};

export default TestType;
