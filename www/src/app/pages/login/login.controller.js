export default class LoginController {
  constructor($log, $state, $uibModalStack, AuthService, NotificationService) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
    this.$uibModalStack = $uibModalStack;
    this.AuthService = AuthService;
    this.NotificationService = NotificationService;
    this.params = {
      bar: 'foo'
    };
  }

  login() {
    this.params.username = angular.lowercase(this.params.username);

    this.AuthService.login(this.params.username, this.params.password)
      .then(() => {
        this.$state.go('main.jobs');
      })
      .catch(err => {
        if (err.status === 520) {
          this.NotificationService.handleError(
            'LoginController',
            err.data,
            err.status
          );
        } else {
          this.NotificationService.log(err.data.message, 'error');
        }
      });
  }

  $onInit() {
    this.$uibModalStack.dismissAll();
  }
}
