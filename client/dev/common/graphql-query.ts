/**
 * Created by marius on 25/10/2016.
 */
import gql from 'graphql-tag';

class Document {
  constructor(definition: any) {
    this.definitions.push(definition);
  }

  kind = 'Document';
  definitions: Array<any> = [];
}

export class GraphqlQuery {
  constructor(query: string) {
    this.queryDocument = gql([query]);
  }

  query(name?: string): any {
    return this.operation('query', name);
  }

  mutation(name?: string): any {
    return this.operation('mutation', name);
  }

  private queryDocument: Document;

  private operation(operation: string, name?: string): any {
    if (name) {
      var definition = this.queryDocument.definitions.find(def => def.name.value === name && def.operation === operation);
      if (definition) {
        return new Document(definition);
      } else {
        throw new Error('Unable to find ' + name.toUpperCase() + ' ' + operation);
      }
    } else {
      var definitions = this.queryDocument.definitions.find(def => def.operation === operation);
      if (definitions.length == 1) {
        return new Document(this.queryDocument.definitions[0]);
      } else {
        throw new Error('There must be exactly one ' + operation + ' if no name is provided');
      }
    }
  }
}
