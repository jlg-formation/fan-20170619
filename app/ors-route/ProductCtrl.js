export class ProductCtrl {

    // static get $inject(){ return ['$http']; }

    constructor($http, $q) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;
    }

    start() {
        console.log('Start !!');
        this.$http.get('../ws/s1').then((response) => {
            console.log('response', response);
            return this.$q.all([
                this.$http.get('../ws/s2').then((response) => {
                    console.log('response', response);
                    return this.$http.get('../ws/s5');
                }),
                this.$http.get('../ws/s3'),
                this.$http.get('../ws/s4')
            ]);
        }).then((responses) => {
            console.log('responses', responses);
            return this.$http.get('../ws/s6');
        }).then((response) => {
            console.log('response', response);
        }).catch((error) => {
            console.error('error', error);
        });

    }

}
