webpackJsonp([3],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_page__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DiscoverPageModule = (function () {
    function DiscoverPageModule() {
    }
    return DiscoverPageModule;
}());
DiscoverPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["a" /* SuperTabsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */]
        ]
    })
], DiscoverPageModule);

//# sourceMappingURL=discover-page.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs_toolbar_super_tabs_toolbar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__super_tabs_container_super_tabs_container__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_super_tabs_controller__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabs; });









var SuperTabs = (function () {
    function SuperTabs(parent, viewCtrl, _app, el, rnd, superTabsCtrl, linker, domCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this._app = _app;
        this.el = el;
        this.rnd = rnd;
        this.superTabsCtrl = superTabsCtrl;
        this.linker = linker;
        this.domCtrl = domCtrl;
        /**
         * Color of the slider that moves based on what tab is selected
         */
        this.indicatorColor = 'primary';
        /**
         * Badge color
         */
        this.badgeColor = 'primary';
        /**
         * Configuration
         */
        this.config = {};
        this.tabsPlacement = 'top';
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        /**
         * @private
         */
        this.isToolbarVisible = true;
        /**
         * @private
         */
        this._tabs = [];
        this._scrollTabs = false;
        this._selectedTabIndex = 0;
        this.watches = [];
        this.hasIcons = false;
        this.hasTitles = false;
        this.init = false;
        this.parent = parent;
        if (this.parent) {
            this.parent.registerChildNav(this);
        }
        else if (viewCtrl && viewCtrl.getNav()) {
            this.parent = viewCtrl.getNav();
            this.parent.registerChildNav(this);
        }
        else if (this._app) {
            this._app._setRootNav(this);
        }
        var obsToMerge = [
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(window, 'orientationchange'),
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(window, 'resize')
        ];
        if (viewCtrl) {
            viewCtrl._setContent(this);
            viewCtrl._setContentRef(el);
            obsToMerge.push(viewCtrl.didEnter);
        }
        // re-adjust the height of the slider when the orientation changes
        this.watches.push(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(this, obsToMerge)
            .debounceTime(10)
            .subscribe(function () {
            _this.updateTabWidth();
            _this.setFixedIndicatorWidth();
            _this.tabsContainer.refreshDimensions();
            _this.tabsContainer.slideTo(_this.selectedTabIndex);
            _this.alignIndicatorPosition();
            _this.refreshTabWidths();
            _this.refreshContainerHeight();
        }));
    }
    Object.defineProperty(SuperTabs.prototype, "height", {
        get: function () {
            return this.el.nativeElement.offsetHeight;
        },
        /**
         * Height of the tabs
         */
        set: function (val) {
            this.rnd.setStyle(this.el.nativeElement, 'height', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTabs.prototype, "selectedTabIndex", {
        get: function () {
            return this._selectedTabIndex;
        },
        /**
         * The initial selected tab index
         * @param val {number} tab index
         */
        set: function (val) {
            this._selectedTabIndex = Number(val);
            this.init && this.alignIndicatorPosition(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTabs.prototype, "scrollTabs", {
        get: function () {
            return this._scrollTabs;
        },
        set: function (val) {
            this._scrollTabs = typeof val !== 'boolean' || val === true;
        },
        enumerable: true,
        configurable: true
    });
    SuperTabs.prototype.ngOnInit = function () {
        var defaultConfig = {
            dragThreshold: 10,
            maxDragAngle: 40,
            sideMenuThreshold: 50,
            transitionDuration: 300,
            transitionEase: 'cubic-bezier(0.35, 0, 0.25, 1)',
            shortSwipeDuration: 300
        };
        for (var prop in this.config) {
            defaultConfig[prop] = this.config[prop];
        }
        this.config = defaultConfig;
        this.id = this.id || "super-tabs-" + ++superTabsIds;
        this.superTabsCtrl.registerInstance(this);
        if (this.tabsPlacement === 'bottom') {
            this.rnd.addClass(this.getElementRef().nativeElement, 'tabs-placement-bottom');
        }
    };
    SuperTabs.prototype.ngAfterContentInit = function () {
        this.updateTabWidth();
        this.toolbar.tabs = this._tabs;
    };
    SuperTabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tabsSegment = this.linker.initNav(this);
        if (tabsSegment && !tabsSegment.component) {
            this.selectedTabIndex = this.linker.getSelectedTabIndex(this, tabsSegment.name, this.selectedTabIndex);
        }
        this.linker.navChange('switch');
        if (!this.hasTitles && !this.hasIcons)
            this.isToolbarVisible = false;
        this.tabsContainer.slideTo(this.selectedTabIndex, false);
        this.refreshTabStates();
        this.setFixedIndicatorWidth();
        // we need this to make sure the "slide" thingy doesn't move outside the screen
        this.maxIndicatorPosition = this.el.nativeElement.offsetWidth - (this.el.nativeElement.offsetWidth / this._tabs.length);
        setTimeout(function () { return _this.alignIndicatorPosition(); }, 100);
        this.refreshContainerHeight();
        this.init = true;
    };
    SuperTabs.prototype.ngOnDestroy = function () {
        this.watches.forEach(function (watch) {
            watch.unsubscribe && watch.unsubscribe();
        });
        this.parent.unregisterChildNav(this);
        this.superTabsCtrl.unregisterInstance(this.id);
    };
    SuperTabs.prototype.setBadge = function (tabId, value) {
        this.getTabById(tabId).setBadge(value);
    };
    SuperTabs.prototype.clearBadge = function (tabId) {
        this.getTabById(tabId).clearBadge();
    };
    SuperTabs.prototype.increaseBadge = function (tabId, increaseBy) {
        this.getTabById(tabId).increaseBadge(increaseBy);
    };
    SuperTabs.prototype.decreaseBadge = function (tabId, decreaseBy) {
        this.getTabById(tabId).decreaseBadge(decreaseBy);
    };
    SuperTabs.prototype.enableTabsSwipe = function (enable) {
        this.tabsContainer.enableTabsSwipe(enable);
    };
    SuperTabs.prototype.enableTabSwipe = function (tabId, enable) {
        this.tabsContainer.enableTabSwipe(this.getTabIndexById(tabId), enable);
    };
    SuperTabs.prototype.showToolbar = function (show) {
        this.isToolbarVisible = show;
        this.refreshContainerHeight();
    };
    SuperTabs.prototype.slideTo = function (indexOrId) {
        if (typeof indexOrId === 'string') {
            indexOrId = this.getTabIndexById(indexOrId);
        }
        this.selectedTabIndex = indexOrId;
        this.tabsContainer.slideTo(indexOrId);
    };
    SuperTabs.prototype.getActiveChildNav = function () {
        return this._tabs[this.selectedTabIndex];
    };
    SuperTabs.prototype.addTab = function (tab) {
        tab.rootParams = tab.rootParams || {};
        tab.rootParams.rootNavCtrl = this.parent;
        tab.tabId = tab.tabId || "super-tabs-" + this.id + "-tab-" + this._tabs.length;
        this._tabs.push(tab);
        if (tab.icon) {
            this.hasIcons = true;
        }
        if (tab.title) {
            this.hasTitles = true;
        }
        tab.setWidth(this.el.nativeElement.offsetWidth);
    };
    /**
     * We listen to drag events to move the "slide" thingy along with the slides
     */
    SuperTabs.prototype.onDrag = function () {
        var _this = this;
        if (!this.isToolbarVisible)
            return;
        this.domCtrl.write(function () {
            var singleSlideWidth = _this.tabsContainer.tabWidth, slidesWidth = _this.tabsContainer.containerWidth;
            var percentage = Math.abs(_this.tabsContainer.containerPosition / slidesWidth);
            if (_this.scrollTabs) {
                var originalSlideStart = singleSlideWidth * _this.selectedTabIndex, originalPosition = _this.getRelativeIndicatorPosition(), originalWidth = _this.getSegmentButtonWidth();
                var nextPosition = void 0, nextWidth = void 0, indicatorPosition = void 0, indicatorWidth = void 0;
                var deltaTabPos = originalSlideStart - Math.abs(_this.tabsContainer.containerPosition);
                percentage = Math.abs(deltaTabPos / singleSlideWidth);
                if (deltaTabPos < 0) {
                    // going to next slide
                    nextPosition = _this.getRelativeIndicatorPosition(_this.selectedTabIndex + 1);
                    nextWidth = _this.getSegmentButtonWidth(_this.selectedTabIndex + 1);
                    indicatorPosition = originalPosition + percentage * (nextPosition - originalPosition);
                }
                else {
                    // going to previous slide
                    nextPosition = _this.getRelativeIndicatorPosition(_this.selectedTabIndex - 1);
                    nextWidth = _this.getSegmentButtonWidth(_this.selectedTabIndex - 1);
                    indicatorPosition = originalPosition - percentage * (originalPosition - nextPosition);
                }
                var deltaWidth = nextWidth - originalWidth;
                indicatorWidth = originalWidth + percentage * deltaWidth;
                if ((originalWidth > nextWidth && indicatorWidth < nextWidth) || (originalWidth < nextWidth && indicatorWidth > nextWidth)) {
                    // this is only useful on desktop, because you are able to drag and swipe through multiple tabs at once
                    // which results in the indicator width to be super small/big since it's changing based on the current/next widths
                    indicatorWidth = nextWidth;
                }
                _this.alignTabButtonsContainer();
                _this.toolbar.setIndicatorProperties(indicatorWidth, indicatorPosition);
            }
            else {
                _this.toolbar.setIndicatorPosition(Math.min(percentage * singleSlideWidth, _this.maxIndicatorPosition));
            }
        });
    };
    /**
     * Runs when the user clicks on a segment button
     * @param index
     */
    SuperTabs.prototype.onTabChange = function (index) {
        if (index <= this._tabs.length) {
            var currentTab = this.getActiveTab();
            var activeView = currentTab.getActive();
            activeView._willLeave(false);
            activeView._didLeave();
            this.selectedTabIndex = index;
            this.linker.navChange('switch');
            this.refreshTabStates();
            activeView = this.getActiveTab().getActive();
            if (activeView) {
                activeView._willEnter();
                activeView._didEnter();
            }
            this.tabSelect.emit({
                index: index,
                id: this._tabs[index].tabId
            });
        }
    };
    SuperTabs.prototype.onToolbarTabSelect = function (index) {
        this.tabsContainer.slideTo(index);
        this.onTabChange(index);
    };
    SuperTabs.prototype.onContainerTabSelect = function (ev) {
        if (ev.changed) {
            this.onTabChange(ev.index);
        }
        this.alignIndicatorPosition(true);
    };
    SuperTabs.prototype.refreshTabStates = function () {
        var _this = this;
        this._tabs.forEach(function (tab, i) {
            tab.setActive(i === _this.selectedTabIndex);
            tab.load(Math.abs(_this.selectedTabIndex - i) < 2);
        });
    };
    SuperTabs.prototype.updateTabWidth = function () {
        this.tabsContainer.tabWidth = this.el.nativeElement.offsetWidth;
    };
    SuperTabs.prototype.refreshContainerHeight = function () {
        var heightOffset = 0;
        if (this.isToolbarVisible) {
            heightOffset -= 4;
            this.hasTitles && (heightOffset += 40);
            this.hasIcons && (heightOffset += 40);
        }
        this.rnd.setStyle(this.tabsContainer.getNativeElement(), 'height', "calc(100% - " + heightOffset + "px)");
    };
    SuperTabs.prototype.refreshTabWidths = function () {
        var width = this.el.nativeElement.offsetWidth;
        this._tabs.forEach(function (tab) {
            tab.setWidth(width);
        });
    };
    SuperTabs.prototype.alignTabButtonsContainer = function (animate) {
        var mw = this.el.nativeElement.offsetWidth, // max width
        iw = this.toolbar.indicatorWidth, // indicator width
        ip = this.toolbar.indicatorPosition, // indicatorPosition
        sp = this.toolbar.segmentPosition; // segment position
        if (this.toolbar.segmentWidth <= mw) {
            if (this.toolbar.segmentPosition !== 0) {
                this.toolbar.setSegmentPosition(0, animate);
            }
            return;
        }
        var pos;
        if (ip + iw + (mw / 2 - iw / 2) > mw + sp) {
            // we need to move the segment container to the left
            var delta = (ip + iw + (mw / 2 - iw / 2)) - mw - sp;
            pos = sp + delta;
            var max = this.toolbar.segmentWidth - mw;
            pos = pos < max ? pos : max;
        }
        else if (ip - (mw / 2 - iw / 2) < sp) {
            // we need to move the segment container to the right
            pos = ip - (mw / 2 - iw / 2);
            pos = pos >= 0 ? pos : 0;
        }
        else
            return; // no need to move the segment container
        this.toolbar.setSegmentPosition(pos, animate);
    };
    SuperTabs.prototype.getRelativeIndicatorPosition = function (index) {
        if (index === void 0) { index = this.selectedTabIndex; }
        var position = 0;
        for (var i = 0; i < this.toolbar.segmentButtonWidths.length; i++) {
            if (index > Number(i)) {
                position += this.toolbar.segmentButtonWidths[i] + 5;
            }
        }
        position += 5 * (index + 1);
        return position;
    };
    SuperTabs.prototype.getAbsoluteIndicatorPosition = function () {
        var position = this.selectedTabIndex * this.tabsContainer.tabWidth / this._tabs.length;
        return position <= this.maxIndicatorPosition ? position : this.maxIndicatorPosition;
    };
    /**
     * Gets the width of a tab button when `scrollTabs` is set to `true`
     */
    SuperTabs.prototype.getSegmentButtonWidth = function (index) {
        if (index === void 0) { index = this.selectedTabIndex; }
        if (!this.isToolbarVisible)
            return;
        return this.toolbar.segmentButtonWidths[index];
    };
    SuperTabs.prototype.setFixedIndicatorWidth = function () {
        if (this.scrollTabs || !this.isToolbarVisible)
            return;
        // the width of the "slide", should be equal to the width of a single `ion-segment-button`
        // we'll just calculate it instead of querying for a segment button
        this.toolbar.setIndicatorWidth(this.el.nativeElement.offsetWidth / this._tabs.length, false);
    };
    /**
     * Aligns slide position with selected tab
     */
    SuperTabs.prototype.alignIndicatorPosition = function (animate) {
        if (animate === void 0) { animate = false; }
        if (!this.isToolbarVisible)
            return;
        if (this.scrollTabs) {
            this.toolbar.alignIndicator(this.getRelativeIndicatorPosition(), this.getSegmentButtonWidth(), animate);
            this.alignTabButtonsContainer(animate);
        }
        else {
            this.toolbar.setIndicatorPosition(this.getAbsoluteIndicatorPosition(), animate);
        }
    };
    SuperTabs.prototype.getTabIndexById = function (tabId) {
        return this._tabs.findIndex(function (tab) { return tab.tabId === tabId; });
    };
    SuperTabs.prototype.getTabById = function (tabId) {
        return this._tabs.find(function (tab) { return tab.tabId === tabId; });
    };
    SuperTabs.prototype.getActiveTab = function () {
        return this._tabs[this.selectedTabIndex];
    };
    SuperTabs.prototype.getElementRef = function () { return this.el; };
    SuperTabs.prototype.initPane = function () { return true; };
    SuperTabs.prototype.paneChanged = function () { };
    SuperTabs.prototype.getSelected = function () { };
    SuperTabs.prototype.setTabbarPosition = function () { };
    return SuperTabs;
}());

SuperTabs.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */], args: [{
                selector: 'super-tabs',
                template: "\n    <super-tabs-toolbar [tabsPlacement]=\"tabsPlacement\" [hidden]=\"!isToolbarVisible\" [config]=\"config\"\n                        [color]=\"toolbarBackground\"\n                        [tabsColor]=\"toolbarColor\" [indicatorColor]=\"indicatorColor\" [badgeColor]=\"badgeColor\"\n                        [scrollTabs]=\"scrollTabs\"\n                        [selectedTab]=\"selectedTabIndex\"\n                        (tabSelect)=\"onToolbarTabSelect($event)\"></super-tabs-toolbar>\n    <super-tabs-container [config]=\"config\" [tabsCount]=\"_tabs.length\" [selectedTabIndex]=\"selectedTabIndex\"\n                          (tabSelect)=\"onContainerTabSelect($event)\" (onDrag)=\"onDrag($event)\">\n      <ng-content></ng-content>\n    </super-tabs-container>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
                providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* RootNode */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* forwardRef */])(function () { return SuperTabs; }) }]
            },] },
];
/** @nocollapse */
SuperTabs.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Optional */] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Optional */] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* App */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__providers_super_tabs_controller__["a" /* SuperTabsController */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* DeepLinker */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* DomController */], },
]; };
SuperTabs.propDecorators = {
    'toolbarBackground': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'toolbarColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'indicatorColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'badgeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'selectedTabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'scrollTabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabsPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Output */] },],
    'toolbar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_3__super_tabs_toolbar_super_tabs_toolbar__["a" /* SuperTabsToolbar */],] },],
    'tabsContainer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_4__super_tabs_container_super_tabs_container__["a" /* SuperTabsContainer */],] },],
};
var superTabsIds = -1;
//# sourceMappingURL=super-tabs.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsController; });

var SuperTabsController = (function () {
    function SuperTabsController() {
        this.instances = [];
    }
    SuperTabsController.prototype.setBadge = function (tabId, value, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.setBadge(tabId, value);
    };
    SuperTabsController.prototype.clearBadge = function (tabId, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.clearBadge(tabId);
    };
    SuperTabsController.prototype.increaseBadge = function (tabId, increaseBy, tabsId) {
        if (increaseBy === void 0) { increaseBy = 1; }
        var instance = this.getInstance(tabsId);
        instance && instance.increaseBadge(tabId, increaseBy);
    };
    SuperTabsController.prototype.decreaseBadge = function (tabId, decreaseBy, tabsId) {
        if (decreaseBy === void 0) { decreaseBy = 1; }
        var instance = this.getInstance(tabsId);
        instance && instance.decreaseBadge(tabId, decreaseBy);
    };
    /**
     * Enables/disables swiping on a specific tabs instance
     * @param enable
     * @param [tabsId]
     */
    SuperTabsController.prototype.enableTabsSwipe = function (enable, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.enableTabsSwipe(enable);
    };
    /**
     * Enables/disables swiping when this tab is active
     * @param tabId
     * @param enable
     * @param [tabsId]
     */
    SuperTabsController.prototype.enableTabSwipe = function (tabId, enable, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.enableTabSwipe(tabId, enable);
    };
    SuperTabsController.prototype.showToolbar = function (show, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.showToolbar(show);
    };
    SuperTabsController.prototype.slideTo = function (tabIndexOrId, tabsId) {
        var instance = this.getInstance(tabsId);
        instance && instance.slideTo(tabIndexOrId);
    };
    /**
     * @private
     */
    SuperTabsController.prototype.registerInstance = function (instance) {
        this.instances.push(instance);
    };
    /**
     * @private
     */
    SuperTabsController.prototype.unregisterInstance = function (id) {
        var instanceIndex = this.getInstanceIndex(id);
        if (instanceIndex > -1)
            this.instances.splice(instanceIndex, 1);
    };
    SuperTabsController.prototype.getInstanceIndex = function (id) {
        return this.instances.findIndex(function (instance) { return instance.id === id; });
    };
    SuperTabsController.prototype.getInstance = function (id) {
        return (!!id && this.instances[this.getInstanceIndex(id)]) || this.instances[0];
    };
    return SuperTabsController;
}());

SuperTabsController.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
SuperTabsController.ctorParameters = function () { return []; };
//# sourceMappingURL=super-tabs-controller.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_transition_controller__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs_super_tabs__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTab; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SuperTab = (function (_super) {
    __extends(SuperTab, _super);
    function SuperTab(parent, app, config, plt, keyboard, el, zone, rnd, cfr, gestureCtrl, transCtrl, errorHandler, linker, _dom, cd) {
        var _this = _super.call(this, parent, app, config, plt, keyboard, el, zone, rnd, cfr, gestureCtrl, transCtrl, linker, _dom, errorHandler) || this;
        _this.linker = linker;
        _this._dom = _dom;
        _this.cd = cd;
        _this.badge = 0;
        _this.loaded = false;
        _this.init = new Promise(function (resolve) { return _this.initResolve = resolve; });
        return _this;
    }
    Object.defineProperty(SuperTab.prototype, "tabTitle", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "index", {
        get: function () {
            return this.parent.getTabIndexById(this.tabId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "_tabId", {
        get: function () {
            return this.tabId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "swipeBackEnabled", {
        get: function () {
            return this._sbEnabled;
        },
        set: function (val) {
            this._sbEnabled = !!val;
            this._swipeBackCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuperTab.prototype, "_vp", {
        /**
         * @hidden
         */
        set: function (val) {
            this.setViewport(val);
        },
        enumerable: true,
        configurable: true
    });
    SuperTab.prototype.ngOnInit = function () {
        this.parent.addTab(this);
    };
    SuperTab.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    SuperTab.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    SuperTab.prototype.setActive = function (active) {
        if (active) {
            this.cd.reattach();
            this.cd.detectChanges();
        }
        else if (!active) {
            this.cd.detach();
        }
    };
    SuperTab.prototype.load = function (load) {
        var _this = this;
        if (load && !this.loaded) {
            this.init.then(function () {
                _this.push(_this.root, _this.rootParams, { animate: false });
                _this.loaded = true;
            });
        }
    };
    SuperTab.prototype.setBadge = function (value) {
        this.badge = value;
    };
    SuperTab.prototype.clearBadge = function () {
        this.badge = 0;
    };
    SuperTab.prototype.increaseBadge = function (increaseBy) {
        this.badge += increaseBy;
    };
    SuperTab.prototype.decreaseBadge = function (decreaseBy) {
        this.badge = Math.max(0, this.badge - decreaseBy);
    };
    SuperTab.prototype.setWidth = function (width) {
        this.setElementStyle('width', width + 'px');
    };
    return SuperTab;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavControllerBase */]));

SuperTab.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */], args: [{
                selector: 'super-tab',
                template: '<div #viewport></div><div class="nav-decor"></div>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
SuperTab.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__super_tabs_super_tabs__["a" /* SuperTabs */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* App */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Config */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Keyboard */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* GestureController */], },
    { type: __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_transition_controller__["a" /* TransitionController */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ErrorHandler */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* DeepLinker */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Optional */] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* DomController */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], },
]; };
SuperTab.propDecorators = {
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'icon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'root': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'rootParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */], args: ['id',] },],
    'badge': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'swipeBackEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    '_vp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: ['viewport', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ViewContainerRef */] },] },],
};
//# sourceMappingURL=super-tab.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsContainer; });



var SuperTabsContainer = (function () {
    function SuperTabsContainer(el, rnd, plt, domCtrl, ngZone) {
        this.el = el;
        this.rnd = rnd;
        this.plt = plt;
        this.domCtrl = domCtrl;
        this.ngZone = ngZone;
        this.tabsCount = 0;
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        // View bindings
        this.containerPosition = 0;
        this.tabWidth = 0;
        this.containerWidth = 0;
        this.globalSwipeEnabled = true;
        this.swipeEnabledPerTab = {};
    }
    SuperTabsContainer.prototype.ngAfterViewInit = function () {
        this.init();
    };
    SuperTabsContainer.prototype.ngOnDestroy = function () {
        this.gesture && this.gesture.destroy();
    };
    SuperTabsContainer.prototype.enableTabsSwipe = function (enable) {
        this.globalSwipeEnabled = enable;
    };
    SuperTabsContainer.prototype.enableTabSwipe = function (tabIndex, enable) {
        this.swipeEnabledPerTab[tabIndex] = enable;
    };
    SuperTabsContainer.prototype.refreshDimensions = function () {
        this.calculateContainerWidth();
        this.setContainerWidth();
        this.refreshMinMax();
    };
    SuperTabsContainer.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    SuperTabsContainer.prototype.init = function () {
        var _this = this;
        this.refreshDimensions();
        this.gesture = new __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__["a" /* SuperTabsPanGesture */](this.plt, this.container.nativeElement, this.config, this.rnd);
        this.gesture.onMove = function (delta) {
            if (_this.globalSwipeEnabled === false)
                return;
            if (_this.swipeEnabledPerTab[_this.selectedTabIndex] === false)
                return;
            if ((_this.containerPosition === _this.maxPosX && delta >= 0) || (_this.containerPosition === _this.minPosX && delta <= 0))
                return;
            _this.containerPosition += delta;
            _this.plt.raf(function () {
                _this.onDrag.emit();
                _this.moveContainer();
            });
        };
        this.gesture.onEnd = function (shortSwipe, shortSwipeDelta) {
            if (_this.globalSwipeEnabled === false)
                return;
            if (_this.swipeEnabledPerTab[_this.selectedTabIndex] === false)
                return;
            // get tab index based on container position
            var tabIndex = Math.round(_this.containerPosition / _this.tabWidth);
            // handle short swipes
            // only short swipe if we didn't change tab already in this gesture
            (tabIndex === _this.selectedTabIndex) && shortSwipe && ((shortSwipeDelta < 0 && tabIndex++) || (shortSwipeDelta > 0 && tabIndex--));
            // get location based on tab index
            var position = Math.max(_this.minPosX, Math.min(_this.maxPosX, tabIndex * _this.tabWidth));
            tabIndex = position / _this.tabWidth;
            // move container if we changed position
            if (position !== _this.containerPosition) {
                _this.plt.raf(function () {
                    _this.moveContainer(true, position, function () { return _this.ngZone.run(function () { return _this.setSelectedTab(tabIndex); }); });
                });
            }
            else
                _this.setSelectedTab(tabIndex);
        };
    };
    SuperTabsContainer.prototype.setSelectedTab = function (index) {
        this.tabSelect.emit({ index: index, changed: index !== this.selectedTabIndex });
        this.selectedTabIndex = index;
    };
    SuperTabsContainer.prototype.calculateContainerWidth = function () {
        this.containerWidth = this.tabWidth * this.tabsCount;
    };
    SuperTabsContainer.prototype.setContainerWidth = function () {
        this.rnd.setStyle(this.container.nativeElement, 'width', this.containerWidth + 'px');
    };
    SuperTabsContainer.prototype.slideTo = function (index, animate) {
        var _this = this;
        if (animate === void 0) { animate = true; }
        this.plt.raf(function () { return _this.moveContainer(animate, index * _this.tabWidth); });
    };
    SuperTabsContainer.prototype.moveContainer = function (animate, positionX, callback) {
        if (animate === void 0) { animate = false; }
        if (callback === void 0) { callback = function () { }; }
        var el = this.container.nativeElement;
        if (animate) {
            if (el.style[this.plt.Css.transform].indexOf('all') === -1) {
                this.rnd.setStyle(el, this.plt.Css.transition, "all " + this.config.transitionDuration + "ms " + this.config.transitionEase);
            }
            this.rnd.setStyle(el, this.plt.Css.transform, "translate3d(" + -1 * positionX + "px, 0, 0)");
            this.containerPosition = positionX;
        }
        else {
            if (positionX) {
                this.containerPosition = positionX;
            }
            if (el.style[this.plt.Css.transform] !== 'initial') {
                this.rnd.setStyle(el, this.plt.Css.transition, 'initial');
            }
            this.containerPosition = Math.max(this.minPosX, Math.min(this.maxPosX, this.containerPosition));
            this.rnd.setStyle(el, this.plt.Css.transform, "translate3d(" + -1 * this.containerPosition + "px, 0, 0)");
        }
        callback();
    };
    SuperTabsContainer.prototype.refreshMinMax = function () {
        this.minPosX = 0;
        this.maxPosX = (this.tabsCount - 1) * this.tabWidth;
    };
    return SuperTabsContainer;
}());

SuperTabsContainer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */], args: [{
                selector: 'super-tabs-container',
                template: '<div #container><ng-content></ng-content></div>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
SuperTabsContainer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* DomController */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */], },
]; };
SuperTabsContainer.propDecorators = {
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabsCount': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'selectedTabIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Output */] },],
    'onDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Output */] },],
    'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: ['container',] },],
};
//# sourceMappingURL=super-tabs-container.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsToolbar; });



var SuperTabsToolbar = (function () {
    function SuperTabsToolbar(el, plt, rnd, domCtrl) {
        this.el = el;
        this.plt = plt;
        this.rnd = rnd;
        this.domCtrl = domCtrl;
        this.color = '';
        this.tabsColor = '';
        this.badgeColor = '';
        this.scrollTabs = false;
        this.indicatorColor = '';
        this.selectedTab = 0;
        this.indicatorPosition = 0;
        this.indicatorWidth = 0;
        this.tabSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        /**
         * @private
         */
        this.segmentPosition = 0;
        /**
         * The width of each button
         */
        this.segmentButtonWidths = [];
        /**
         * The segment width
         */
        this.segmentWidth = 0;
        this.tabs = [];
        this.animationState = {
            indicator: false,
            segment: false
        };
    }
    SuperTabsToolbar.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.gesture = new __WEBPACK_IMPORTED_MODULE_2__super_tabs_pan_gesture__["a" /* SuperTabsPanGesture */](this.plt, this.tabButtonsContainer.nativeElement, this.config, this.rnd);
        this.gesture.onMove = function (delta) {
            var newCPos = _this.segmentPosition + delta;
            var mw = _this.el.nativeElement.offsetWidth, cw = _this.segmentWidth;
            newCPos = Math.max(0, Math.min(newCPos, cw - mw));
            _this.setSegmentPosition(newCPos);
        };
        if (this.scrollTabs) {
            this.plt.timeout(function () {
                _this.indexSegmentButtonWidths();
            }, 10);
        }
    };
    SuperTabsToolbar.prototype.ngOnDestroy = function () {
        this.gesture && this.gesture.destroy();
    };
    SuperTabsToolbar.prototype.onTabSelect = function (index) {
        this.tabSelect.emit(index);
    };
    SuperTabsToolbar.prototype.alignIndicator = function (position, width, animate) {
        this.setIndicatorProperties(width, position, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorPosition = function (position, animate) {
        this.setIndicatorProperties(this.indicatorWidth, position, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorWidth = function (width, animate) {
        this.setIndicatorProperties(width, this.indicatorPosition, animate);
    };
    SuperTabsToolbar.prototype.setIndicatorProperties = function (width, position, animate) {
        this.indicatorWidth = width;
        this.indicatorPosition = position;
        var scale = width / 100;
        this.toggleAnimation('indicator', animate);
        this.rnd.setStyle(this.indicator.nativeElement, this.plt.Css.transform, 'translate3d(' + (position - this.segmentPosition) + 'px, 0, 0) scale3d(' + scale + ', 1, 1)');
    };
    SuperTabsToolbar.prototype.setSegmentPosition = function (position, animate) {
        this.segmentPosition = position;
        this.toggleAnimation('segment', animate);
        this.rnd.setStyle(this.segment.getNativeElement(), this.plt.Css.transform, "translate3d(" + -1 * position + "px,0,0)");
        this.setIndicatorPosition(this.indicatorPosition, animate);
    };
    /**
     * Enables/disables animation
     * @param el
     * @param animate
     */
    SuperTabsToolbar.prototype.toggleAnimation = function (el, animate) {
        if (!this.config || this.config.transitionDuration === 0)
            return;
        // only change style if the value changed
        if (this.animationState[el] === animate)
            return;
        this.animationState[el] = animate;
        var _el = el === 'indicator' ? this.indicator.nativeElement : this.segment.getNativeElement();
        var value = animate ? "all " + this.config.transitionDuration + "ms " + this.config.transitionEase : 'initial';
        this.rnd.setStyle(_el, this.plt.Css.transition, value);
    };
    /**
     * Indexes the segment button widths
     */
    SuperTabsToolbar.prototype.indexSegmentButtonWidths = function () {
        var index = [], total = 0;
        this.segmentButtons.forEach(function (btn, i) {
            index[i] = btn._elementRef.nativeElement.offsetWidth;
            total += index[i] + 10;
        });
        this.segmentButtonWidths = index;
        this.segmentWidth = total;
    };
    return SuperTabsToolbar;
}());

SuperTabsToolbar.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */], args: [{
                selector: 'super-tabs-toolbar',
                template: "\n    <ion-toolbar [color]=\"color\" mode=\"md\" [class.scroll-tabs]=\"scrollTabs\">\n      <div class=\"tab-buttons-container\" #tabButtonsContainer>\n        <div *ngIf=\"tabsPlacement === 'bottom'\" class=\"indicator {{ 'button-md-' + indicatorColor }}\" #indicator></div>\n        <ion-segment [color]=\"tabsColor\" [(ngModel)]=\"selectedTab\" mode=\"md\">\n          <ion-segment-button *ngFor=\"let tab of tabs; let i = index\" [value]=\"i\" (ionSelect)=\"selectedTab !== i && onTabSelect(i)\">\n            <ion-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\"></ion-icon>\n            {{tab.title}}\n            <span [hidden]=\"tab.badge <= 0\" class=\"badge {{ 'badge-md-' + badgeColor }}\">{{tab.badge}}</span>\n          </ion-segment-button>\n        </ion-segment>\n        <div *ngIf=\"tabsPlacement === 'top'\" class=\"indicator {{ 'button-md-' + indicatorColor }}\" #indicator></div>\n      </div>\n    </ion-toolbar>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
SuperTabsToolbar.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* DomController */], },
]; };
SuperTabsToolbar.propDecorators = {
    'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabsColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'badgeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'scrollTabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'indicatorColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'selectedTab': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabsPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */] },],
    'tabSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Output */] },],
    'segmentButtons': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChildren */], args: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* SegmentButton */],] },],
    'tabButtonsContainer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: ['tabButtonsContainer',] },],
    'indicator': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: ['indicator',] },],
    'segment': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Segment */],] },],
};
//# sourceMappingURL=super-tabs-toolbar.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsPanGesture; });

var SuperTabsPanGesture = (function () {
    function SuperTabsPanGesture(plt, el, config, rnd) {
        this.plt = plt;
        this.el = el;
        this.config = config;
        this.rnd = rnd;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.listeners = [];
        this.listeners.push(rnd.listen(el, 'touchstart', this._onStart.bind(this)), rnd.listen(el, 'touchmove', this._onMove.bind(this)), rnd.listen(el, 'touchend', this._onEnd.bind(this)));
        if (config.sideMenu === 'both' || config.sideMenu === 'left') {
            this.leftThreshold = config.sideMenuThreshold;
        }
        if (config.sideMenu === 'both' || config.sideMenu === 'right') {
            this.rightThreshold = config.sideMenuThreshold;
        }
    }
    SuperTabsPanGesture.prototype.destroy = function () {
        this.listeners.forEach(function (fn) { return fn(); });
    };
    SuperTabsPanGesture.prototype._onStart = function (ev) {
        var coords = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["a" /* pointerCoord */])(ev), vw = this.plt.width();
        if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
            // ignore this gesture, it started in the side menu touch zone
            this.shouldCapture = false;
            return;
        }
        // the starting point looks good, let's see what happens when we move
        this.initialCoords = coords;
        if (this.config.shortSwipeDuration > 0)
            this.initialTimestamp = Date.now();
        this.lastPosX = coords.x;
    };
    SuperTabsPanGesture.prototype._onMove = function (ev) {
        var coords = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["a" /* pointerCoord */])(ev);
        if (!this.isDragging) {
            if (typeof this.shouldCapture !== 'boolean')
                // we haven't decided yet if we want to capture this gesture
                this.checkGesture(coords);
            if (this.shouldCapture === true)
                // gesture is good, let's capture all next onTouchMove events
                this.isDragging = true;
            else
                return;
        }
        // stop anything else from capturing these events, to make sure the content doesn't slide
        ev.stopPropagation();
        ev.preventDefault();
        // get delta X
        var deltaX = this.lastPosX - coords.x;
        // emit value
        this.onMove && this.onMove(deltaX);
        // update last X value
        this.lastPosX = coords.x;
    };
    SuperTabsPanGesture.prototype._onEnd = function (ev) {
        var coords = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_dom__["a" /* pointerCoord */])(ev);
        if (this.shouldCapture === true) {
            if (this.config.shortSwipeDuration > 0) {
                var deltaTime = Date.now() - this.initialTimestamp;
                if (deltaTime <= this.config.shortSwipeDuration)
                    this.onEnd && this.onEnd(true, coords.x - this.initialCoords.x);
                else
                    this.onEnd && this.onEnd(false);
            }
            else
                this.onEnd && this.onEnd(false);
        }
        this.isDragging = false;
        this.shouldCapture = undefined;
    };
    SuperTabsPanGesture.prototype.checkGesture = function (newCoords) {
        var radians = this.config.maxDragAngle * (Math.PI / 180), maxCosine = Math.cos(radians), deltaX = newCoords.x - this.initialCoords.x, deltaY = newCoords.y - this.initialCoords.y, distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance >= this.config.dragThreshold) {
            // swipe is long enough so far
            // lets check the angle
            var angle = Math.atan2(deltaY, deltaX), cosine = Math.cos(angle);
            this.shouldCapture = Math.abs(cosine) > maxCosine;
        }
    };
    return SuperTabsPanGesture;
}());

//# sourceMappingURL=super-tabs-pan-gesture.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_super_tab_super_tab__ = __webpack_require__(355);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_super_tabs_super_tabs__ = __webpack_require__(353);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_super_tabs_controller__ = __webpack_require__(354);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_tabs_module__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__super_tabs_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_super_tab_super_tab__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_super_tabs_super_tabs__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_super_tabs_controller__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_super_tabs_toolbar_super_tabs_toolbar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_super_tabs_container_super_tabs_container__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabsModule; });







var SuperTabsModule = (function () {
    function SuperTabsModule() {
    }
    SuperTabsModule.forRoot = function () {
        return {
            ngModule: SuperTabsModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_super_tabs_controller__["a" /* SuperTabsController */]
            ]
        };
    };
    return SuperTabsModule;
}());

SuperTabsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__components_super_tab_super_tab__["a" /* SuperTab */],
                    __WEBPACK_IMPORTED_MODULE_3__components_super_tabs_super_tabs__["a" /* SuperTabs */],
                    __WEBPACK_IMPORTED_MODULE_5__components_super_tabs_toolbar_super_tabs_toolbar__["a" /* SuperTabsToolbar */],
                    __WEBPACK_IMPORTED_MODULE_6__components_super_tabs_container_super_tabs_container__["a" /* SuperTabsContainer */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__components_super_tab_super_tab__["a" /* SuperTab */],
                    __WEBPACK_IMPORTED_MODULE_3__components_super_tabs_super_tabs__["a" /* SuperTabs */]
                ]
            },] },
];
/** @nocollapse */
SuperTabsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=super-tabs.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var merge_1 = __webpack_require__(246);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var debounceTime_1 = __webpack_require__(364);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(31);
var async_1 = __webpack_require__(368);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(34);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(32);
var Action_1 = __webpack_require__(365);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(361);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(366);
var AsyncScheduler_1 = __webpack_require__(367);
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DiscoverPage = (function () {
    function DiscoverPage() {
        this.page1 = 'AllDiscover';
        this.page2 = 'ForkDiscover';
    }
    return DiscoverPage;
}());
DiscoverPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-discover-page',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/'<!--\n  Generated template for the Discover page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n    <super-tabs height="100%" tabColor="light" toolbarColor="light" toolbarBackground="bule" sliderColor="light">\n        <super-tab [root]="page1" title="分享"></super-tab>\n        <super-tab [root]="page2" title="我关注的"></super-tab>\n    </super-tabs>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/,
    }),
    __metadata("design:paramtypes", [])
], DiscoverPage);

//# sourceMappingURL=discover-page.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map