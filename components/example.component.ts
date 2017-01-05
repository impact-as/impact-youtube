/**
 * Created by MST on 16/08/16.
 */

namespace ExampleModule {

    class ExampleController {

        constructor() {

        }

        $onDestroy() {
        }

    }

    class ExampleComponent implements ng.IComponentOptions {

        public bindings: any;
        public controller: any;
        public template: string;

        constructor() {
            this.bindings = {
            };
            this.controller = ExampleController;
            this.template = "";
        }

    }

    angular.module(moduleId).component('example', new ExampleComponent());

}