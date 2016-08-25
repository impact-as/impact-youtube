/**
 * Created by mikkel on 16/08/16.
 */

namespace ExampleModule {

    export class ExampleService {

        constructor(private $q:ng.IQService,
                    private $http:ng.IHttpService) {

        }


    }

    angular.module(moduleId).service("exampleService", ExampleService);

}