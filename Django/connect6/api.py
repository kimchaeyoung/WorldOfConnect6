from rest_framework.routers import DefaultRouter
from api.views import *
from rest_framework_extensions.routers import NestedRouterMixin




class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass
 
router = NestedDefaultRouter()

sessions_router = router.register('sessions', SessionViewSet)

sessions_router.register(
    'stones', StoneViewSet,
    basename='session-stones',
    parents_query_lookups=['room'])

 
