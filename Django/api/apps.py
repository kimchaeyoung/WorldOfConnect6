from django.apps import AppConfig


class ApiConfig(AppConfig):
    name = 'api'
    verbose_name = 'Api Configuration for Stone'
    def ready(self):
        import api.signals
