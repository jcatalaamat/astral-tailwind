import { r as reactExports, n as nanoid, N as NavigationRouteContext, u as useLatestCallback, j as jsxRuntimeExports, a as NavigationContainerRefContext, b as useOptionsGetters, c as NavigationStateContext, E as EnsureSingleNavigator, d as NavigationBuilderContext, C as CommonActions, T as ThemeContext, U as UnhandledActionContext, g as goBack, D as DeprecatedNavigationInChildContext, i as isArrayEqual, S as SingleNavigatorContext, e as reset, f as navigate, h as deepFreeze, k as useEventEmitter, l as useChildListeners, m as useKeyedChildListeners, o as Screen$1, G as Group, p as useContextKey, R as React, q as getNameFromFilePath, s as useIsomorphicLayoutEffect$1, t as useSortedScreens, v as StackRouter, F as FlagsContext } from "../_virtual_one-entry.js";
/* empty css                      */
import "node:async_hooks";
import "crypto";
const CurrentRenderContext = /* @__PURE__ */ reactExports.createContext(void 0);
function isRecordEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every((key) => a[key] === b[key]);
}
function useRouteCache(routes) {
  reactExports.useMemo(() => ({
    current: /* @__PURE__ */ new Map()
  }), []);
  {
    return routes;
  }
}
const NavigationContext = /* @__PURE__ */ reactExports.createContext(void 0);
const NavigationHelpersContext = /* @__PURE__ */ reactExports.createContext(void 0);
const PreventRemoveContext = /* @__PURE__ */ reactExports.createContext(void 0);
const transformPreventedRoutes = (preventedRoutesMap) => {
  const preventedRoutesToTransform = [...preventedRoutesMap.values()];
  const preventedRoutes = preventedRoutesToTransform.reduce((acc, {
    routeKey,
    preventRemove
  }) => {
    var _a;
    acc[routeKey] = {
      preventRemove: ((_a = acc[routeKey]) == null ? void 0 : _a.preventRemove) || preventRemove
    };
    return acc;
  }, {});
  return preventedRoutes;
};
function PreventRemoveProvider({
  children
}) {
  const [parentId] = reactExports.useState(() => nanoid());
  const [preventedRoutesMap, setPreventedRoutesMap] = reactExports.useState(() => /* @__PURE__ */ new Map());
  const navigation = reactExports.useContext(NavigationHelpersContext);
  const route = reactExports.useContext(NavigationRouteContext);
  const preventRemoveContextValue = reactExports.useContext(PreventRemoveContext);
  const setParentPrevented = preventRemoveContextValue == null ? void 0 : preventRemoveContextValue.setPreventRemove;
  const setPreventRemove = useLatestCallback((id, routeKey, preventRemove) => {
    if (preventRemove && (navigation == null || (navigation == null ? void 0 : navigation.getState().routes.every((route2) => route2.key !== routeKey)))) {
      throw new Error(`Couldn't find a route with the key ${routeKey}. Is your component inside NavigationContent?`);
    }
    setPreventedRoutesMap((prevPrevented) => {
      var _a, _b;
      if (routeKey === ((_a = prevPrevented.get(id)) == null ? void 0 : _a.routeKey) && preventRemove === ((_b = prevPrevented.get(id)) == null ? void 0 : _b.preventRemove)) {
        return prevPrevented;
      }
      const nextPrevented = new Map(prevPrevented);
      if (preventRemove) {
        nextPrevented.set(id, {
          routeKey,
          preventRemove
        });
      } else {
        nextPrevented.delete(id);
      }
      return nextPrevented;
    });
  });
  const isPrevented = [...preventedRoutesMap.values()].some(({
    preventRemove
  }) => preventRemove);
  reactExports.useEffect(() => {
    if ((route == null ? void 0 : route.key) !== void 0 && setParentPrevented !== void 0) {
      setParentPrevented(parentId, route.key, isPrevented);
      return () => {
        setParentPrevented(parentId, route.key, false);
      };
    }
    return;
  }, [parentId, isPrevented, route == null ? void 0 : route.key, setParentPrevented]);
  const value = reactExports.useMemo(() => ({
    setPreventRemove,
    preventedRoutes: transformPreventedRoutes(preventedRoutesMap)
  }), [setPreventRemove, preventedRoutesMap]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PreventRemoveContext.Provider, {
    value,
    children
  });
}
function useNavigation$1() {
  const root = reactExports.useContext(NavigationContainerRefContext);
  const navigation = reactExports.useContext(NavigationContext);
  if (navigation === void 0 && root === void 0) {
    throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
  }
  return navigation ?? root;
}
const NavigationContent = ({
  render,
  children
}) => {
  return render(children);
};
function useComponent(render) {
  const renderRef = reactExports.useRef(render);
  renderRef.current = render;
  reactExports.useEffect(() => {
    renderRef.current = null;
  });
  return reactExports.useRef(({
    children
  }) => {
    const render2 = renderRef.current;
    if (render2 === null) {
      throw new Error("The returned component must be rendered in the same render phase as the hook.");
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationContent, {
      render: render2,
      children
    });
  }).current;
}
function useCurrentRender({
  state,
  navigation,
  descriptors
}) {
  const current = reactExports.useContext(CurrentRenderContext);
  if (current && navigation.isFocused()) {
    current.options = descriptors[state.routes[state.index].key].options;
  }
}
const NavigationFocusedRouteStateContext = /* @__PURE__ */ reactExports.createContext(void 0);
const StaticContainer = /* @__PURE__ */ reactExports.memo(function StaticContainer2(props) {
  return props.children;
}, (prevProps, nextProps) => {
  const prevPropKeys = Object.keys(prevProps);
  const nextPropKeys = Object.keys(nextProps);
  if (prevPropKeys.length !== nextPropKeys.length) {
    return false;
  }
  for (const key of prevPropKeys) {
    if (key === "children") {
      continue;
    }
    if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }
  return true;
});
function SceneView({
  screen,
  route,
  navigation,
  routeState,
  getState,
  setState,
  options,
  clearOptions
}) {
  const navigatorKeyRef = reactExports.useRef();
  const getKey = reactExports.useCallback(() => navigatorKeyRef.current, []);
  const {
    addOptionsGetter
  } = useOptionsGetters({
    key: route.key,
    options,
    navigation
  });
  const setKey = reactExports.useCallback((key) => {
    navigatorKeyRef.current = key;
  }, []);
  const getCurrentState = reactExports.useCallback(() => {
    const state = getState();
    const currentRoute = state.routes.find((r) => r.key === route.key);
    return currentRoute ? currentRoute.state : void 0;
  }, [getState, route.key]);
  const setCurrentState = reactExports.useCallback((child) => {
    const state = getState();
    setState({
      ...state,
      routes: state.routes.map((r) => {
        if (r.key !== route.key) {
          return r;
        }
        const nextRoute = {
          ...r,
          state: child
        };
        if (nextRoute.params && ("state" in nextRoute.params && typeof nextRoute.params.state === "object" && nextRoute.params.state !== null || "screen" in nextRoute.params && typeof nextRoute.params.screen === "string")) {
          const {
            state: state2,
            screen: screen2,
            params,
            initial,
            ...rest
          } = nextRoute.params;
          if (Object.keys(rest).length) {
            nextRoute.params = rest;
          } else {
            delete nextRoute.params;
          }
        }
        return nextRoute;
      })
    });
  }, [getState, route.key, setState]);
  const isInitialRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    isInitialRef.current = false;
  });
  reactExports.useEffect(() => {
    return clearOptions;
  }, []);
  const getIsInitial = reactExports.useCallback(() => isInitialRef.current, []);
  const parentFocusedRouteState = reactExports.useContext(NavigationFocusedRouteStateContext);
  const focusedRouteState = reactExports.useMemo(() => {
    const state = {
      routes: [{
        key: route.key,
        name: route.name,
        params: route.params,
        path: route.path
      }]
    };
    const addState = (parent) => {
      const parentRoute = parent == null ? void 0 : parent.routes[0];
      if (parentRoute) {
        return {
          routes: [{
            ...parentRoute,
            state: addState(parentRoute.state)
          }]
        };
      }
      return state;
    };
    return addState(parentFocusedRouteState);
  }, [parentFocusedRouteState, route.key, route.name, route.params, route.path]);
  const context = reactExports.useMemo(() => ({
    state: routeState,
    getState: getCurrentState,
    setState: setCurrentState,
    getKey,
    setKey,
    getIsInitial,
    addOptionsGetter
  }), [routeState, getCurrentState, setCurrentState, getKey, setKey, getIsInitial, addOptionsGetter]);
  const ScreenComponent = screen.getComponent ? screen.getComponent() : screen.component;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationStateContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationFocusedRouteStateContext.Provider, {
      value: focusedRouteState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnsureSingleNavigator, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaticContainer, {
          name: screen.name,
          render: ScreenComponent || screen.children,
          navigation,
          route,
          children: ScreenComponent !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenComponent, {
            navigation,
            route
          }) : screen.children !== void 0 ? screen.children({
            navigation,
            route
          }) : null
        })
      })
    })
  });
}
function useNavigationCache({
  state,
  getState,
  navigation,
  setOptions,
  router,
  emitter
}) {
  const {
    stackRef
  } = reactExports.useContext(NavigationBuilderContext);
  const base = reactExports.useMemo(() => {
    const {
      emit,
      ...rest
    } = navigation;
    const actions = {
      ...router.actionCreators,
      ...CommonActions
    };
    const dispatch = () => {
      throw new Error("Actions cannot be dispatched from a placeholder screen.");
    };
    const helpers = Object.keys(actions).reduce((acc, name) => {
      acc[name] = dispatch;
      return acc;
    }, {});
    return {
      ...rest,
      ...helpers,
      addListener: () => {
        return () => {
        };
      },
      removeListener: () => {
      },
      dispatch,
      getParent: (id) => {
        if (id !== void 0 && id === rest.getId()) {
          return base;
        }
        return rest.getParent(id);
      },
      setOptions: () => {
        throw new Error("Options cannot be set from a placeholder screen.");
      },
      isFocused: () => false
    };
  }, [navigation, router.actionCreators]);
  const cache = reactExports.useMemo(
    () => ({
      current: {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [base, getState, navigation, setOptions, emitter]
  );
  cache.current = state.routes.reduce((acc, route) => {
    const previous = cache.current[route.key];
    if (previous) {
      acc[route.key] = previous;
    } else {
      const dispatch = (thunk) => {
        const action = typeof thunk === "function" ? thunk(getState()) : thunk;
        if (action != null) {
          navigation.dispatch({
            source: route.key,
            ...action
          });
        }
      };
      const withStack = (callback) => {
        let isStackSet = false;
        try {
          if (false) ;
          callback();
        } finally {
          if (isStackSet && stackRef) {
            stackRef.current = void 0;
          }
        }
      };
      const actions = {
        ...router.actionCreators,
        ...CommonActions
      };
      const helpers = Object.keys(actions).reduce((acc2, name) => {
        acc2[name] = (...args) => withStack(() => (
          // @ts-expect-error: name is a valid key, but TypeScript is dumb
          dispatch(actions[name](...args))
        ));
        return acc2;
      }, {});
      acc[route.key] = {
        ...base,
        ...helpers,
        // FIXME: too much work to fix the types for now
        ...emitter.create(route.key),
        dispatch: (thunk) => withStack(() => dispatch(thunk)),
        getParent: (id) => {
          if (id !== void 0 && id === base.getId()) {
            return acc[route.key];
          }
          return base.getParent(id);
        },
        setOptions: (options) => {
          setOptions((o) => ({
            ...o,
            [route.key]: {
              ...o[route.key],
              ...options
            }
          }));
        },
        isFocused: () => {
          const state2 = base.getState();
          if (state2.routes[state2.index].key !== route.key) {
            return false;
          }
          return navigation ? navigation.isFocused() : true;
        }
      };
    }
    return acc;
  }, {});
  return {
    base,
    navigations: cache.current
  };
}
function useDescriptors({
  state,
  screens,
  navigation,
  screenOptions,
  screenLayout,
  onAction,
  getState,
  setState,
  addListener,
  addKeyedListener,
  onRouteFocus,
  router,
  emitter
}) {
  const theme = reactExports.useContext(ThemeContext);
  const [options, setOptions] = reactExports.useState({});
  const {
    onDispatchAction,
    onOptionsChange,
    scheduleUpdate,
    flushUpdates,
    stackRef
  } = reactExports.useContext(NavigationBuilderContext);
  const context = reactExports.useMemo(() => ({
    navigation,
    onAction,
    addListener,
    addKeyedListener,
    onRouteFocus,
    onDispatchAction,
    onOptionsChange,
    scheduleUpdate,
    flushUpdates,
    stackRef
  }), [navigation, onAction, addListener, addKeyedListener, onRouteFocus, onDispatchAction, onOptionsChange, scheduleUpdate, flushUpdates, stackRef]);
  const {
    base,
    navigations
  } = useNavigationCache({
    state,
    getState,
    navigation,
    setOptions,
    router,
    emitter
  });
  const routes = useRouteCache(state.routes);
  const getOptions = (route, navigation2, overrides) => {
    const config = screens[route.name];
    const screen = config.props;
    const optionsList = [
      // The default `screenOptions` passed to the navigator
      screenOptions,
      // The `screenOptions` props passed to `Group` elements
      ...config.options ? config.options.filter(Boolean) : [],
      // The `options` prop passed to `Screen` elements,
      screen.options,
      // The options set via `navigation.setOptions`
      overrides
    ];
    return optionsList.reduce((acc, curr) => Object.assign(
      acc,
      // @ts-expect-error: we check for function but TS still complains
      typeof curr !== "function" ? curr : curr({
        route,
        navigation: navigation2,
        theme
      })
    ), {});
  };
  const render = (route, navigation2, customOptions, routeState) => {
    const config = screens[route.name];
    const screen = config.props;
    const clearOptions = () => setOptions((o) => {
      if (route.key in o) {
        const {
          [route.key]: _,
          ...rest
        } = o;
        return rest;
      }
      return o;
    });
    const layout = (
      // The `layout` prop passed to `Screen` elements,
      screen.layout ?? // The `screenLayout` props passed to `Group` elements
      config.layout ?? // The default `screenLayout` passed to the navigator
      screenLayout
    );
    let element = /* @__PURE__ */ jsxRuntimeExports.jsx(SceneView, {
      navigation: navigation2,
      route,
      screen,
      routeState,
      getState,
      setState,
      options: customOptions,
      clearOptions
    });
    if (layout != null) {
      element = layout({
        route,
        navigation: navigation2,
        // @ts-expect-error: in practice `theme` will be defined
        theme,
        children: element
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBuilderContext.Provider, {
      value: context,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationContext.Provider, {
        value: navigation2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationRouteContext.Provider, {
          value: route,
          children: element
        })
      })
    }, route.key);
  };
  const descriptors = routes.reduce((acc, route, i) => {
    const navigation2 = navigations[route.key];
    const customOptions = getOptions(route, navigation2, options[route.key]);
    const element = render(route, navigation2, customOptions, state.routes[i].state);
    acc[route.key] = {
      route,
      // @ts-expect-error: it's missing action helpers, fix later
      navigation: navigation2,
      render() {
        return element;
      },
      options: customOptions
    };
    return acc;
  }, {});
  const describe = (route, placeholder) => {
    if (!placeholder) {
      if (!(route.key in descriptors)) {
        throw new Error(`Couldn't find a route with the key ${route.key}.`);
      }
      return descriptors[route.key];
    }
    const navigation2 = base;
    const customOptions = getOptions(route, navigation2, {});
    const element = render(route, navigation2, customOptions, void 0);
    return {
      route,
      navigation: navigation2,
      render() {
        return element;
      },
      options: customOptions
    };
  };
  return {
    describe,
    descriptors
  };
}
function useFocusedListenersChildrenAdapter({
  navigation,
  focusedListeners
}) {
  const {
    addListener
  } = reactExports.useContext(NavigationBuilderContext);
  const listener = reactExports.useCallback((callback) => {
    if (navigation.isFocused()) {
      for (const listener2 of focusedListeners) {
        const {
          handled,
          result
        } = listener2(callback);
        if (handled) {
          return {
            handled,
            result
          };
        }
      }
      return {
        handled: true,
        result: callback(navigation)
      };
    } else {
      return {
        handled: false,
        result: null
      };
    }
  }, [focusedListeners, navigation]);
  reactExports.useEffect(() => addListener == null ? void 0 : addListener("focus", listener), [addListener, listener]);
}
function useFocusEvents({
  state,
  emitter
}) {
  const navigation = reactExports.useContext(NavigationContext);
  const lastFocusedKeyRef = reactExports.useRef();
  const currentFocusedKey = state.routes[state.index].key;
  reactExports.useEffect(() => navigation == null ? void 0 : navigation.addListener("focus", () => {
    lastFocusedKeyRef.current = currentFocusedKey;
    emitter.emit({
      type: "focus",
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  reactExports.useEffect(() => navigation == null ? void 0 : navigation.addListener("blur", () => {
    lastFocusedKeyRef.current = void 0;
    emitter.emit({
      type: "blur",
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  reactExports.useEffect(() => {
    const lastFocusedKey = lastFocusedKeyRef.current;
    lastFocusedKeyRef.current = currentFocusedKey;
    if (lastFocusedKey === void 0 && !navigation) {
      emitter.emit({
        type: "focus",
        target: currentFocusedKey
      });
    }
    if (lastFocusedKey === currentFocusedKey || !(navigation ? navigation.isFocused() : true)) {
      return;
    }
    if (lastFocusedKey === void 0) {
      return;
    }
    emitter.emit({
      type: "blur",
      target: lastFocusedKey
    });
    emitter.emit({
      type: "focus",
      target: currentFocusedKey
    });
  }, [currentFocusedKey, emitter, navigation]);
}
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useLazyValue(create) {
  const lazyRef = reactExports.useRef();
  if (lazyRef.current === void 0) {
    lazyRef.current = create();
  }
  return lazyRef.current;
}
function useNavigationHelpers({
  id: navigatorId,
  onAction,
  getState,
  emitter,
  router,
  stateRef
}) {
  const onUnhandledAction = reactExports.useContext(UnhandledActionContext);
  const parentNavigationHelpers = reactExports.useContext(NavigationContext);
  return reactExports.useMemo(() => {
    const dispatch = (op) => {
      const action = typeof op === "function" ? op(getState()) : op;
      const handled = onAction(action);
      if (!handled) {
        onUnhandledAction == null ? void 0 : onUnhandledAction(action);
      }
    };
    const actions = {
      ...router.actionCreators,
      ...CommonActions
    };
    const helpers = Object.keys(actions).reduce((acc, name) => {
      acc[name] = (...args) => dispatch(actions[name](...args));
      return acc;
    }, {});
    const navigationHelpers = {
      ...parentNavigationHelpers,
      ...helpers,
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, goBack(), {
          routeNames: state.routeNames,
          routeParamList: {},
          routeGetIdList: {}
        }) !== null || (parentNavigationHelpers == null ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      getId: () => navigatorId,
      getParent: (id) => {
        if (id !== void 0) {
          let current = navigationHelpers;
          while (current && id !== current.getId()) {
            current = current.getParent();
          }
          return current;
        }
        return parentNavigationHelpers;
      },
      getState: () => {
        if (stateRef.current != null) {
          return stateRef.current;
        }
        return getState();
      }
    };
    return navigationHelpers;
  }, [router, parentNavigationHelpers, emitter.emit, getState, onAction, onUnhandledAction, navigatorId, stateRef]);
}
const VISITED_ROUTE_KEYS = Symbol("VISITED_ROUTE_KEYS");
const shouldPreventRemove = (emitter, beforeRemoveListeners, currentRoutes, nextRoutes, action) => {
  var _a;
  const nextRouteKeys = nextRoutes.map((route) => route.key);
  const removedRoutes = currentRoutes.filter((route) => !nextRouteKeys.includes(route.key)).reverse();
  const visitedRouteKeys = (
    // @ts-expect-error: add this property to mark that we've already emitted this action
    action[VISITED_ROUTE_KEYS] ?? /* @__PURE__ */ new Set()
  );
  const beforeRemoveAction = {
    ...action,
    [VISITED_ROUTE_KEYS]: visitedRouteKeys
  };
  for (const route of removedRoutes) {
    if (visitedRouteKeys.has(route.key)) {
      continue;
    }
    const isPrevented = (_a = beforeRemoveListeners[route.key]) == null ? void 0 : _a.call(beforeRemoveListeners, beforeRemoveAction);
    if (isPrevented) {
      return true;
    }
    visitedRouteKeys.add(route.key);
    const event = emitter.emit({
      type: "beforeRemove",
      target: route.key,
      data: {
        action: beforeRemoveAction
      },
      canPreventDefault: true
    });
    if (event.defaultPrevented) {
      return true;
    }
  }
  return false;
};
function useOnPreventRemove({
  getState,
  emitter,
  beforeRemoveListeners
}) {
  const {
    addKeyedListener
  } = reactExports.useContext(NavigationBuilderContext);
  const route = reactExports.useContext(NavigationRouteContext);
  const routeKey = route == null ? void 0 : route.key;
  reactExports.useEffect(() => {
    if (routeKey) {
      return addKeyedListener == null ? void 0 : addKeyedListener("beforeRemove", routeKey, (action) => {
        const state = getState();
        return shouldPreventRemove(emitter, beforeRemoveListeners, state.routes, [], action);
      });
    }
  }, [addKeyedListener, beforeRemoveListeners, emitter, getState, routeKey]);
}
function useOnAction({
  router,
  getState,
  setState,
  key,
  actionListeners,
  beforeRemoveListeners,
  routerConfigOptions,
  emitter
}) {
  const {
    onAction: onActionParent,
    onRouteFocus: onRouteFocusParent,
    addListener: addListenerParent,
    onDispatchAction
  } = reactExports.useContext(NavigationBuilderContext);
  const navigationInChildEnabled = reactExports.useContext(DeprecatedNavigationInChildContext);
  const routerConfigOptionsRef = reactExports.useRef(routerConfigOptions);
  reactExports.useEffect(() => {
    routerConfigOptionsRef.current = routerConfigOptions;
  });
  const onAction = reactExports.useCallback((action, visitedNavigators = /* @__PURE__ */ new Set()) => {
    const state = getState();
    if (visitedNavigators.has(state.key)) {
      return false;
    }
    visitedNavigators.add(state.key);
    if (typeof action.target !== "string" || action.target === state.key) {
      let result = router.getStateForAction(state, action, routerConfigOptionsRef.current);
      result = result === null && action.target === state.key ? state : result;
      if (result !== null) {
        onDispatchAction(action, state === result);
        if (state !== result) {
          const isPrevented = shouldPreventRemove(emitter, beforeRemoveListeners, state.routes, result.routes, action);
          if (isPrevented) {
            return true;
          }
          setState(result);
        }
        if (onRouteFocusParent !== void 0) {
          const shouldFocus = router.shouldActionChangeFocus(action);
          if (shouldFocus && key !== void 0) {
            onRouteFocusParent(key);
          }
        }
        return true;
      }
    }
    if (onActionParent !== void 0) {
      if (onActionParent(action, visitedNavigators)) {
        return true;
      }
    }
    if (typeof action.target === "string" || // For backward compatibility
    action.type === "NAVIGATE_DEPRECATED" || navigationInChildEnabled) {
      for (let i = actionListeners.length - 1; i >= 0; i--) {
        const listener = actionListeners[i];
        if (listener(action, visitedNavigators)) {
          return true;
        }
      }
    }
    return false;
  }, [actionListeners, beforeRemoveListeners, emitter, getState, navigationInChildEnabled, key, onActionParent, onDispatchAction, onRouteFocusParent, router, setState]);
  useOnPreventRemove({
    getState,
    emitter,
    beforeRemoveListeners
  });
  reactExports.useEffect(() => addListenerParent == null ? void 0 : addListenerParent("action", onAction), [addListenerParent, onAction]);
  return onAction;
}
function useOnGetState({
  getState,
  getStateListeners
}) {
  const {
    addKeyedListener
  } = reactExports.useContext(NavigationBuilderContext);
  const route = reactExports.useContext(NavigationRouteContext);
  const key = route ? route.key : "root";
  const getRehydratedState = reactExports.useCallback(() => {
    const state = getState();
    const routes = state.routes.map((route2) => {
      var _a;
      const childState = (_a = getStateListeners[route2.key]) == null ? void 0 : _a.call(getStateListeners);
      if (route2.state === childState) {
        return route2;
      }
      return {
        ...route2,
        state: childState
      };
    });
    if (isArrayEqual(state.routes, routes)) {
      return state;
    }
    return {
      ...state,
      routes
    };
  }, [getState, getStateListeners]);
  reactExports.useEffect(() => {
    return addKeyedListener == null ? void 0 : addKeyedListener("getState", key, getRehydratedState);
  }, [addKeyedListener, getRehydratedState, key]);
}
function useOnRouteFocus({
  router,
  getState,
  key: sourceRouteKey,
  setState
}) {
  const {
    onRouteFocus: onRouteFocusParent
  } = reactExports.useContext(NavigationBuilderContext);
  return reactExports.useCallback((key) => {
    const state = getState();
    const result = router.getStateForRouteFocus(state, key);
    if (result !== state) {
      setState(result);
    }
    if (onRouteFocusParent !== void 0 && sourceRouteKey !== void 0) {
      onRouteFocusParent(sourceRouteKey);
    }
  }, [getState, onRouteFocusParent, router, setState, sourceRouteKey]);
}
function useRegisterNavigator() {
  const [key] = reactExports.useState(() => nanoid());
  const container = reactExports.useContext(SingleNavigatorContext);
  if (container === void 0) {
    throw new Error("Couldn't register the navigator. Have you wrapped your app with 'NavigationContainer'?\n\nThis can also happen if there are multiple copies of '@react-navigation' packages installed.");
  }
  reactExports.useEffect(() => {
    const {
      register,
      unregister
    } = container;
    register(key);
    return () => unregister(key);
  }, [container, key]);
  return key;
}
function useScheduleUpdate(callback) {
  const {
    scheduleUpdate,
    flushUpdates
  } = reactExports.useContext(NavigationBuilderContext);
  scheduleUpdate(callback);
  useIsomorphicLayoutEffect(flushUpdates);
}
const isValidKey = (key) => key === void 0 || typeof key === "string" && key !== "";
const getRouteConfigsFromChildren = (children, groupKey, groupOptions, groupLayout) => {
  const configs = reactExports.Children.toArray(children).reduce((acc, child) => {
    var _a, _b;
    if (/* @__PURE__ */ reactExports.isValidElement(child)) {
      if (child.type === Screen$1) {
        if (!isValidKey(child.props.navigationKey)) {
          throw new Error(`Got an invalid 'navigationKey' prop (${JSON.stringify(child.props.navigationKey)}) for the screen '${child.props.name}'. It must be a non-empty string or 'undefined'.`);
        }
        acc.push({
          keys: [groupKey, child.props.navigationKey],
          options: groupOptions,
          layout: groupLayout,
          props: child.props
        });
        return acc;
      }
      if (child.type === reactExports.Fragment || child.type === Group) {
        if (!isValidKey(child.props.navigationKey)) {
          throw new Error(`Got an invalid 'navigationKey' prop (${JSON.stringify(child.props.navigationKey)}) for the group. It must be a non-empty string or 'undefined'.`);
        }
        acc.push(...getRouteConfigsFromChildren(child.props.children, child.props.navigationKey, child.type !== Group ? groupOptions : groupOptions != null ? [...groupOptions, child.props.screenOptions] : [child.props.screenOptions], typeof child.props.screenLayout === "function" ? child.props.screenLayout : groupLayout));
        return acc;
      }
    }
    throw new Error(`A navigator can only contain 'Screen', 'Group' or 'React.Fragment' as its direct children (found ${/* @__PURE__ */ reactExports.isValidElement(child) ? `'${typeof child.type === "string" ? child.type : (_a = child.type) == null ? void 0 : _a.name}'${child.props != null && typeof child.props === "object" && "name" in child.props && ((_b = child.props) == null ? void 0 : _b.name) ? ` for the screen '${child.props.name}'` : ""}` : typeof child === "object" ? JSON.stringify(child) : `'${String(child)}'`}). To render this component in the navigator, pass it in the 'component' prop to 'Screen'.`);
  }, []);
  return configs;
};
function useNavigationBuilder(createRouter, options) {
  const navigatorKey = useRegisterNavigator();
  const route = reactExports.useContext(NavigationRouteContext);
  const {
    children,
    layout,
    screenOptions,
    screenLayout,
    screenListeners,
    UNSTABLE_router,
    ...rest
  } = options;
  const routeConfigs = getRouteConfigsFromChildren(children);
  const router = useLazyValue(() => {
    if (rest.initialRouteName != null && routeConfigs.every((config) => config.props.name !== rest.initialRouteName)) {
      throw new Error(`Couldn't find a screen named '${rest.initialRouteName}' to use as 'initialRouteName'.`);
    }
    const original = createRouter(rest);
    if (UNSTABLE_router != null) {
      const overrides = UNSTABLE_router(original);
      return {
        ...original,
        ...overrides
      };
    }
    return original;
  });
  const screens = routeConfigs.reduce((acc, config) => {
    if (config.props.name in acc) {
      throw new Error(`A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '${config.props.name}')`);
    }
    acc[config.props.name] = config;
    return acc;
  }, {});
  const routeNames = routeConfigs.map((config) => config.props.name);
  const routeKeyList = routeNames.reduce((acc, curr) => {
    acc[curr] = screens[curr].keys.map((key) => key ?? "").join(":");
    return acc;
  }, {});
  const routeParamList = routeNames.reduce((acc, curr) => {
    const {
      initialParams
    } = screens[curr].props;
    acc[curr] = initialParams;
    return acc;
  }, {});
  const routeGetIdList = routeNames.reduce((acc, curr) => Object.assign(acc, {
    [curr]: screens[curr].props.getId
  }), {});
  if (!routeNames.length) {
    throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  }
  const isStateValid = reactExports.useCallback((state2) => state2.type === void 0 || state2.type === router.type, [router.type]);
  const isStateInitialized = reactExports.useCallback((state2) => state2 !== void 0 && state2.stale === false && isStateValid(state2), [isStateValid]);
  const {
    state: currentState,
    getState: getCurrentState,
    setState: setCurrentState,
    setKey,
    getKey,
    getIsInitial
  } = reactExports.useContext(NavigationStateContext);
  const stateCleanedUp = reactExports.useRef(false);
  const setState = useLatestCallback((state2) => {
    if (stateCleanedUp.current) {
      return;
    }
    setCurrentState(state2);
  });
  const [initializedState, isFirstStateInitialization] = reactExports.useMemo(() => {
    var _a, _b, _c, _d, _e, _f;
    const initialRouteParamList = routeNames.reduce((acc, curr) => {
      var _a2, _b2, _c2;
      const {
        initialParams
      } = screens[curr].props;
      const initialParamsFromParams = ((_a2 = route == null ? void 0 : route.params) == null ? void 0 : _a2.state) == null && ((_b2 = route == null ? void 0 : route.params) == null ? void 0 : _b2.initial) !== false && ((_c2 = route == null ? void 0 : route.params) == null ? void 0 : _c2.screen) === curr ? route.params.params : void 0;
      acc[curr] = initialParams !== void 0 || initialParamsFromParams !== void 0 ? {
        ...initialParams,
        ...initialParamsFromParams
      } : void 0;
      return acc;
    }, {});
    if ((currentState === void 0 || !isStateValid(currentState)) && ((_a = route == null ? void 0 : route.params) == null ? void 0 : _a.state) == null && !(typeof ((_b = route == null ? void 0 : route.params) == null ? void 0 : _b.screen) === "string" && ((_c = route == null ? void 0 : route.params) == null ? void 0 : _c.initial) !== false)) {
      return [router.getInitialState({
        routeNames,
        routeParamList: initialRouteParamList,
        routeGetIdList
      }), true];
    } else {
      let stateFromParams;
      if (((_d = route == null ? void 0 : route.params) == null ? void 0 : _d.state) != null) {
        stateFromParams = route.params.state;
      } else if (typeof ((_e = route == null ? void 0 : route.params) == null ? void 0 : _e.screen) === "string" && ((_f = route == null ? void 0 : route.params) == null ? void 0 : _f.initial) !== false) {
        stateFromParams = {
          index: 0,
          routes: [{
            name: route.params.screen,
            params: route.params.params,
            path: route.params.path
          }]
        };
      }
      return [router.getRehydratedState(stateFromParams ?? currentState, {
        routeNames,
        routeParamList: initialRouteParamList,
        routeGetIdList
      }), false];
    }
  }, [currentState, router, isStateValid]);
  const previousRouteKeyListRef = reactExports.useRef(routeKeyList);
  reactExports.useEffect(() => {
    previousRouteKeyListRef.current = routeKeyList;
  });
  const previousRouteKeyList = previousRouteKeyListRef.current;
  let state = (
    // If the state isn't initialized, or stale, use the state we initialized instead
    // The state won't update until there's a change needed in the state we have initialized locally
    // So it'll be `undefined` or stale until the first navigation event happens
    isStateInitialized(currentState) ? currentState : initializedState
  );
  let nextState = state;
  if (!isArrayEqual(state.routeNames, routeNames) || !isRecordEqual(routeKeyList, previousRouteKeyList)) {
    nextState = router.getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList,
      routeGetIdList,
      routeKeyChanges: Object.keys(routeKeyList).filter((name) => name in previousRouteKeyList && routeKeyList[name] !== previousRouteKeyList[name])
    });
  }
  const previousNestedParamsRef = reactExports.useRef(route == null ? void 0 : route.params);
  reactExports.useEffect(() => {
    previousNestedParamsRef.current = route == null ? void 0 : route.params;
  }, [route == null ? void 0 : route.params]);
  if (route == null ? void 0 : route.params) {
    const previousParams = previousNestedParamsRef.current;
    let action;
    if (typeof route.params.state === "object" && route.params.state != null && route.params !== previousParams) {
      action = reset(route.params.state);
    } else if (typeof route.params.screen === "string" && (route.params.initial === false && isFirstStateInitialization || route.params !== previousParams)) {
      action = navigate({
        name: route.params.screen,
        params: route.params.params,
        path: route.params.path,
        pop: route.params.pop
      });
    }
    const updatedState = action ? router.getStateForAction(nextState, action, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : null;
    nextState = updatedState !== null ? router.getRehydratedState(updatedState, {
      routeNames,
      routeParamList,
      routeGetIdList
    }) : nextState;
  }
  const shouldUpdate = state !== nextState;
  useScheduleUpdate(() => {
    if (shouldUpdate) {
      setState(nextState);
    }
  });
  state = nextState;
  reactExports.useEffect(() => {
    stateCleanedUp.current = false;
    setKey(navigatorKey);
    if (!getIsInitial()) {
      setState(nextState);
    }
    return () => {
      if (getCurrentState() !== void 0 && getKey() === navigatorKey) {
        setCurrentState(void 0);
        stateCleanedUp.current = true;
      }
    };
  }, []);
  const stateRef = reactExports.useRef(state);
  stateRef.current = state;
  useIsomorphicLayoutEffect(() => {
    stateRef.current = null;
  });
  const getState = useLatestCallback(() => {
    const currentState2 = getCurrentState();
    return deepFreeze(isStateInitialized(currentState2) ? currentState2 : initializedState);
  });
  const emitter = useEventEmitter((e) => {
    const routeNames2 = [];
    let route2;
    if (e.target) {
      route2 = state.routes.find((route3) => route3.key === e.target);
      if (route2 == null ? void 0 : route2.name) {
        routeNames2.push(route2.name);
      }
    } else {
      route2 = state.routes[state.index];
      routeNames2.push(...Object.keys(screens).filter((name) => (route2 == null ? void 0 : route2.name) === name));
    }
    if (route2 == null) {
      return;
    }
    const navigation2 = descriptors[route2.key].navigation;
    const listeners = [].concat(
      ...[screenListeners, ...routeNames2.map((name) => {
        const {
          listeners: listeners2
        } = screens[name].props;
        return listeners2;
      })].map((listeners2) => {
        const map = typeof listeners2 === "function" ? listeners2({
          route: route2,
          navigation: navigation2
        }) : listeners2;
        return map ? Object.keys(map).filter((type) => type === e.type).map((type) => map == null ? void 0 : map[type]) : void 0;
      })
    ).filter((cb, i, self) => cb && self.lastIndexOf(cb) === i);
    listeners.forEach((listener) => listener == null ? void 0 : listener(e));
  });
  useFocusEvents({
    state,
    emitter
  });
  reactExports.useEffect(() => {
    emitter.emit({
      type: "state",
      data: {
        state
      }
    });
  }, [emitter, state]);
  const {
    listeners: childListeners,
    addListener
  } = useChildListeners();
  const {
    keyedListeners,
    addKeyedListener
  } = useKeyedChildListeners();
  const onAction = useOnAction({
    router,
    getState,
    setState,
    key: route == null ? void 0 : route.key,
    actionListeners: childListeners.action,
    beforeRemoveListeners: keyedListeners.beforeRemove,
    routerConfigOptions: {
      routeNames,
      routeParamList,
      routeGetIdList
    },
    emitter
  });
  const onRouteFocus = useOnRouteFocus({
    router,
    key: route == null ? void 0 : route.key,
    getState,
    setState
  });
  const navigation = useNavigationHelpers({
    id: options.id,
    onAction,
    getState,
    emitter,
    router,
    stateRef
  });
  useFocusedListenersChildrenAdapter({
    navigation,
    focusedListeners: childListeners.focus
  });
  useOnGetState({
    getState,
    getStateListeners: keyedListeners.getState
  });
  const {
    describe,
    descriptors
  } = useDescriptors({
    state,
    screens,
    navigation,
    screenOptions,
    screenLayout,
    onAction,
    getState,
    setState,
    onRouteFocus,
    addListener,
    addKeyedListener,
    router,
    // @ts-expect-error: this should have both core and custom events, but too much work right now
    emitter
  });
  useCurrentRender({
    state,
    navigation,
    descriptors
  });
  const NavigationContent2 = useComponent((children2) => {
    const element = layout != null ? layout({
      state,
      descriptors,
      navigation,
      children: children2
    }) : children2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationHelpersContext.Provider, {
      value: navigation,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreventRemoveProvider, {
        children: element
      })
    });
  });
  return {
    state,
    navigation,
    describe,
    descriptors,
    NavigationContent: NavigationContent2
  };
}
function useNavigation(parent) {
  const navigation = useNavigation$1(), contextKey = useContextKey(), normalizedParent = React.useMemo(() => {
    if (!parent) return null;
    const normalized = getNameFromFilePath(parent);
    return parent.startsWith(".") ? relativePaths(contextKey, parent) : normalized;
  }, [contextKey, parent]);
  if (normalizedParent != null) {
    const parentNavigation = navigation.getParent(normalizedParent);
    if (!parentNavigation) throw new Error(`Could not find parent navigation with route "${parent}".` + (normalizedParent !== parent ? ` (normalized: ${normalizedParent})` : ""));
    return parentNavigation;
  }
  return navigation;
}
function relativePaths(from, to) {
  const fromParts = from.split("/").filter(Boolean), toParts = to.split("/").filter(Boolean);
  for (const part of toParts) if (part === "..") {
    if (fromParts.length === 0) throw new Error(`Cannot resolve path "${to}" relative to "${from}"`);
    fromParts.pop();
  } else part === "." || fromParts.push(part);
  return "/" + fromParts.join("/");
}
function Screen({
  name,
  options
}) {
  const navigation = useNavigation(name);
  return useIsomorphicLayoutEffect$1(() => {
    options && // React Navigation will infinitely loop in some cases if an empty object is passed to setOptions.
    // https://github.com/expo/router/issues/452
    Object.keys(options).length && navigation.setOptions(options);
  }, [navigation, options]), null;
}
function useFilterScreenChildren(children, {
  isCustomNavigator,
  contextKey
} = {}) {
  return React.useMemo(() => {
    var _a;
    const customChildren = [], screens = (_a = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child && child.type === Screen) {
        if (!child.props.name) throw new Error(`<Screen /> component in \`default export\` at \`app${contextKey}/_layout\` must have a \`name\` prop when used as a child of a Layout Route.`);
        return child.props;
      }
      isCustomNavigator ? customChildren.push(child) : console.warn(`Layout children must be of type Screen, all other children are ignored. To use custom children, create a custom <Layout />. Update Layout Route at: "app${contextKey}/_layout"`);
    })) == null ? void 0 : _a.filter(Boolean);
    return {
      screens,
      children: customChildren
    };
  }, [children, contextKey, isCustomNavigator]);
}
const NavigatorContext = reactExports.createContext(null);
function Navigator({
  initialRouteName,
  screenOptions,
  children,
  router
}) {
  const contextKey = useContextKey(), {
    screens,
    children: otherSlot
  } = useFilterScreenChildren(children, {
    isCustomNavigator: true,
    contextKey
  }), sorted = useSortedScreens(screens ?? []);
  return sorted.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(QualifiedNavigator, {
    initialRouteName,
    screenOptions,
    screens: sorted,
    contextKey,
    router,
    children: otherSlot
  }) : (console.warn(`Navigator at "${contextKey}" has no children.`), null);
}
function QualifiedNavigator({
  initialRouteName,
  screenOptions,
  children,
  screens,
  contextKey,
  router = StackRouter
}) {
  const {
    state,
    navigation,
    descriptors,
    NavigationContent: NavigationContent2
  } = useNavigationBuilder(router, {
    // Used for getting the parent with navigation.getParent('/normalized/path')
    id: contextKey,
    children: screens,
    screenOptions,
    initialRouteName
  }), value = reactExports.useMemo(() => ({
    contextKey,
    state,
    navigation,
    descriptors,
    router
  }), [contextKey, state, navigation, descriptors, router]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavigatorContext.Provider, {
    value,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationContent2, {
      children
    })
  });
}
function useNavigatorContext() {
  const context = reactExports.useContext(NavigatorContext);
  if (!context) throw new Error("useNavigatorContext must be used within a <Navigator />");
  return context;
}
function useSlot() {
  var _a;
  const context = useNavigatorContext(), flags = reactExports.useContext(FlagsContext), {
    state,
    descriptors
  } = context, current = state.routes.find((route, i) => state.index === i);
  if (!current) return null;
  let renderedElement = ((_a = descriptors[current.key]) == null ? void 0 : _a.render()) ?? null;
  return flags.experimentalPreventLayoutRemounting && renderedElement !== null && (renderedElement = {
    ...renderedElement,
    key: "one-uses-a-static-key-here-for-slot-navigator"
  }), renderedElement;
}
const Slot = reactExports.memo(function(props) {
  var _a;
  const contextKey = useContextKey();
  return ((_a = reactExports.useContext(NavigatorContext)) == null ? void 0 : _a.contextKey) !== contextKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigator, {
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(QualifiedSlot, {})
  }) : /* @__PURE__ */ jsxRuntimeExports.jsx(QualifiedSlot, {});
});
function QualifiedSlot() {
  return useSlot();
}
Navigator.Slot = Slot;
Navigator.useContext = useNavigatorContext;
Navigator.Screen = Screen;
function Layout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
    children: [
      typeof document !== "undefined" && /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
            httpEquiv: "X-UA-Compatible",
            content: "IE=edge"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("link", {
            rel: "icon",
            href: "/favicon.svg"
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
            src: "/animations/luxury.js",
            defer: true
          })
        ]
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Slot, {})
    ]
  });
}
export {
  Layout as default
};
