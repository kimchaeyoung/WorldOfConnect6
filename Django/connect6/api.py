from rest_framework.routers import DefaultRouter
from api.views import *
from rest_framework_extensions.routers import NestedRouterMixin

class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass
 
router = NestedDefaultRouter()

sessions_router = router.register('sessions', SessionViewSet)

blacksession_router = router.register('black-session', BlackSessionViewSet)
whitesession_router = router.register('white-session', WhiteSessionViewSet)

blacksession_router.register('p1_post', BlackViewSet,basename='blacksession-p1_post', parents_query_lookups=['room'] )
whitesession_router.register('p2_post', WhiteViewSet, basename='whitesession-p2_post', parents_query_lookups=['room'])

sessions_router.register(
    'get', StoneViewSet,
    basename='session-get',
    parents_query_lookups=['room'])

 
