(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Documents\GitHub\Notes-App\notes-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0kqm":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-layout/main-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 6, vars: 0, consts: [[1, "layout-box"], [1, "top-bar"], [1, "page-content"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100vh;\n  font-size: 18px i !important;\n  overflow: hidden !important;\n}\n.layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #4682b4, #ff6347);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n}\n.layout-box[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.705);\n  font-size: 25px;\n}\n.layout-box[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLHFFQUFBO0FBOEJSOztFQUVFLGFBQUE7RUFHQSw0QkFBQTtFQUVBLDJCQUFBO0FDbkNGO0FBSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFPRjtBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUVBLCtDQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFHQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFESTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQUdOO0FBQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ2hhbmdpbmcgYnVsbWEgdmFyaWFibGVzIGFuZCBhZGRpbmcgZ2xvYmFsIHN0eWxlc1xyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiAjYTU5YWQ3O1xyXG4kcGluazogIzQ2ODJiNDtcclxuJGJsdWU6ICNmZjYzNDc7XHJcblxyXG4kbGlnaHQtcmVkOiAjZmZmM2YzO1xyXG4kbGlnaHQ6ICNmYWZjZmY7XHJcblxyXG4kZ3JlZW46IHJnYihcclxuICA0NyxcclxuICAxMjgsXHJcbiAgMFxyXG4pOyAvL2J1bG1hIGF1dG9tYXRpY2FsbHkgdGFrZXMgZ3JlZW4gdmFyaWFibGUgdG8gY29sb3IgaXMtc3VjY2VzcyBwcm9wZXJ0eVxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJGJsdWU7XHJcblxyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWZhO1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy8gR2xvYmFsIFN0eWxlc1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgLy9zZXQgdGhlIGRlZmF1bHQgZm9udC1zaXplIHRvIDE4cHhcclxuICBmb250LXNpemU6IDE4cHggaSAhaW1wb3J0YW50O1xyXG5cclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtc2l6ZTogMThweCBpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmxheW91dC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF5b3V0LWJveCAudG9wLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ2ODJiNCwgI2ZmNjM0Nyk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGF5b3V0LWJveCAudG9wLWJhciBoMSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmxheW91dC1ib3ggLnBhZ2UtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FdGA":
/*!**************************************!*\
  !*** ./src/app/shared/note.model.ts ***!
  \**************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'notes-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notes-list/notes-list.component */ "mXHW");
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-layout/main-layout.component */ "0kqm");
/* harmony import */ var _components_note_card_note_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/note-card/note-card.component */ "rnh3");
/* harmony import */ var _components_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/note-details/note-details.component */ "zvtM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"],
        _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
        _components_note_card_note_card_component__WEBPACK_IMPORTED_MODULE_6__["NoteCardComponent"],
        _components_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_7__["NoteDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "mXHW":
/*!***************************************************************!*\
  !*** ./src/app/components/notes-list/notes-list.component.ts ***!
  \***************************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../note-card/note-card.component */ "rnh3");






const _c0 = ["filterInput"];
function NotesListComponent_app_note_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-note-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("delete", function NotesListComponent_app_note_card_8_Template_app_note_card_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const note_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteNote(note_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("link", ctx_r1.generateNoteuRL(note_r2))("@itemAnim", undefined)("title", note_r2.title)("body", note_r2.body);
} }
class NotesListComponent {
    constructor(noteService) {
        this.noteService = noteService;
        //cardTitle:string='first title';
        this.notes = new Array();
        this.filteredNotes = new Array();
    }
    ngOnInit() {
        this.notes = this.noteService.getAll();
        // console.log(this.notes);
        this.filteredNotes = this.noteService.getAll();
        //this.filter('');
    }
    deleteNote(note) {
        let noteId = this.noteService.getId(note);
        this.noteService.delete(noteId);
        //must to update the filteredNotes array
        this.filter(this.filterInputRef.nativeElement.value);
    }
    generateNoteuRL(note) {
        return this.noteService.getId(note);
    }
    filter(query) {
        query = query.toLowerCase().trim();
        let AllResults = new Array();
        //split up the search query into individual words
        let terms = query.split(' ');
        //remove duplicates
        terms = [...new Set(terms)];
        //get all results into the AllResults array
        terms.forEach(term => {
            let results = this.relevantResults(term);
            //append results to the AllResults array
            AllResults = [...AllResults, ...results];
        });
        //remove the duplicates to avoid displaying the same note multiple times in the UI
        this.filteredNotes = [...new Set(AllResults)];
        //sort by relevancy
        this.sortByRelevancy(AllResults);
    }
    relevantResults(query) {
        query = query.toLowerCase().trim();
        let relevantNotes = this.notes.filter(note => {
            if (note.body.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)) {
                return true;
            }
            return false;
        });
        return relevantNotes;
    }
    sortByRelevancy(searchResults) {
        //It will calculate the relevancy of a note based on the no of times it appears in the search results
        let noteFrequency = {};
        searchResults.forEach(note => {
            let noteId = this.noteService.getId(note);
            if (noteFrequency[noteId]) {
                noteFrequency[noteId] += 1;
            }
            else {
                noteFrequency[noteId] = 1;
            }
        });
        this.filteredNotes = this.filteredNotes.sort((a, b) => {
            let IdA = this.noteService.getId(a);
            let IdB = this.noteService.getId(b);
            let aFreq = noteFrequency[IdA];
            let bFreq = noteFrequency[IdB];
            return bFreq - aFreq;
        });
    }
}
NotesListComponent.ɵfac = function NotesListComponent_Factory(t) { return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"])); };
NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotesListComponent, selectors: [["app-notes-list"]], viewQuery: function NotesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterInputRef = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "main-container"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Filter", 1, "input", 3, "keyup"], ["filterInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-search"], [1, "notes-list"], [3, "link", "title", "body", "delete", 4, "ngFor", "ngForOf"], ["routerLink", "new", 1, "button", "floating-add-button", "is-primary"], [3, "link", "title", "body", "delete"]], template: function NotesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NotesListComponent_Template_input_keyup_3_listener($event) { return ctx.filter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NotesListComponent_app_note_card_8_Template, 1, 4, "app-note-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " +Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100vh;\n  font-size: 18px i !important;\n  overflow: hidden !important;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 50px;\n}\n.notes-list[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 70px;\n}\napp-note-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n.floating-add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 500px;\n  border-radius: 0;\n  box-shadow: 0px 0px 15px 5px rgba(165, 154, 215, 0.2);\n  height: 68px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEscUVBQUE7QUE4QlI7O0VBRUUsYUFBQTtFQUdBLDRCQUFBO0VBRUEsMkJBQUE7QUNuQ0Y7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FBTUY7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFNRjtBQUhBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBTUY7QUFIQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEscURBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUtGIiwiZmlsZSI6Im5vdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NoYW5naW5nIGJ1bG1hIHZhcmlhYmxlcyBhbmQgYWRkaW5nIGdsb2JhbCBzdHlsZXNcclxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5cclxuLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XHJcblxyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogI2E1OWFkNztcclxuJHBpbms6ICM0NjgyYjQ7XHJcbiRibHVlOiAjZmY2MzQ3O1xyXG5cclxuJGxpZ2h0LXJlZDogI2ZmZjNmMztcclxuJGxpZ2h0OiAjZmFmY2ZmO1xyXG5cclxuJGdyZWVuOiByZ2IoXHJcbiAgNDcsXHJcbiAgMTI4LFxyXG4gIDBcclxuKTsgLy9idWxtYSBhdXRvbWF0aWNhbGx5IHRha2VzIGdyZWVuIHZhcmlhYmxlIHRvIGNvbG9yIGlzLXN1Y2Nlc3MgcHJvcGVydHlcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRibHVlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmYTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vIEdsb2JhbCBTdHlsZXNcclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIC8vc2V0IHRoZSBkZWZhdWx0IGZvbnQtc2l6ZSB0byAxOHB4XHJcbiAgZm9udC1zaXplOiAxOHB4IGkgIWltcG9ydGFudDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LXNpemU6IDE4cHggaSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ub3Rlcy1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuYXBwLW5vdGUtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZmxvYXRpbmctYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA1cHggcmdiYSgxNjUsIDE1NCwgMjE1LCAwLjIpO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('itemAnim', [
                //Entry Animation
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=>*', [
                    //Initial State
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: 0,
                        opacity: 0,
                        transform: 'scale(0.85)',
                        'margin-bottom': 0,
                        //we have to expand out the padding properties
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                    }),
                    //we first need to animate the spacing (which includes height and margin)
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: '*',
                        'margin-bottom': '*',
                        paddingTop: '*',
                        paddingRight: '*',
                        paddingBottom: '*',
                        paddingLeft: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(60)
                ]),
                //  any state to the element that is removed from the DOM
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [
                    //first scale up
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(1.05)',
                    })),
                    //then scale down back to normal size while beginning to fade out
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(1)',
                        opacity: 0.75
                    })),
                    //scale down and fade out completely
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(0.68)',
                        opacity: 0
                    }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>*', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                            height: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease')
                        ])
                    ], {
                        optional: true
                    })
                ])
            ])
        ] } });


/***/ }),

/***/ "phcf":
/*!*****************************************!*\
  !*** ./src/app/shared/notes.service.ts ***!
  \*****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotesService {
    constructor() {
        this.notes = new Array();
    }
    getAll() {
        return this.notes;
    }
    get(id) {
        return this.notes[id];
    }
    getId(note) {
        return this.notes.indexOf(note);
    }
    add(note) {
        return this.notes.push(note);
    }
    update(id, title, body) {
        let note = this.notes[id];
        note.title = title;
        note.body = body;
    }
    delete(id) {
        return this.notes.splice(id, 1);
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rnh3":
/*!*************************************************************!*\
  !*** ./src/app/components/note-card/note-card.component.ts ***!
  \*************************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["bodyText"];
const _c1 = ["truncator"];
class NoteCardComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        //work out if there is a text-overflow and if not, hide the truncator
        let style = window.getComputedStyle(this.bodyText.nativeElement, null);
        let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
            //if there is a text overflow, then show the truncator
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
        }
        else {
            //hide the truncator
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        }
    }
    onCancelButtonClick() {
        this.deleteEvent.emit();
    }
}
NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) { return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteCardComponent, selectors: [["app-note-card"]], viewQuery: function NoteCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyText = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.truncator = _t.first);
    } }, inputs: { title: "title", body: "body", link: "link" }, outputs: { deleteEvent: "delete" }, decls: 13, vars: 3, consts: [[1, "note-card-container"], [1, "note-card-content", 3, "routerLink"], [1, "note-card-title"], [1, "note-card-body"], ["bodyText", ""], [1, "fade-out-truncation"], ["truncator", ""], [1, "x-button", 3, "click"], [1, "icon"], [1, "fas", "fa-window-close"]], template: function NoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_10_listener() { return ctx.onCancelButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100vh;\n  font-size: 18px i !important;\n  overflow: hidden !important;\n}\n.note-card-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: box-shadow 0.2s ease-out;\n}\n.note-card-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.068);\n}\n.note-card-container[_ngcontent-%COMP%]:hover   .x-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.35s;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #a59ad7;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  color: #555;\n  max-height: 80px;\n  overflow: hidden;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out-truncation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, white 100%);\n}\n.note-card-container[_ngcontent-%COMP%]   .x-button[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #fff3f3;\n  top: 8px;\n  right: 8px;\n  height: 24px;\n  width: 24px;\n  transition: opacity 0.5s ease-out;\n  transform: 0.2s ease-out;\n  opacity: 0;\n}\n.note-card-container[_ngcontent-%COMP%]   .x-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-top: 1px;\n  padding-left: 1px;\n}\n.note-card-container[_ngcontent-%COMP%]   .x-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffe9e9;\n}\n.note-card-container[_ngcontent-%COMP%]   .x-button[_ngcontent-%COMP%]:active {\n  background-color: #ffdada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vdGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxxRUFBQTtBQThCUjs7RUFFRSxhQUFBO0VBR0EsNEJBQUE7RUFFQSwyQkFBQTtBQ25DRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsaURBQUE7RUFDQSxvQ0FBQTtBQU1GO0FBSkU7RUFDRSxlQUFBO0VBQ0EsZ0RBQUE7QUFNSjtBQUhJO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBS047QUFERTtFQUNFLGFBQUE7QUFHSjtBQURJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0RwQkc7QUN1QlQ7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7RUFFQSxTQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSwyR0FBQTtBQUZSO0FBWUU7RUFDRSxrQkFBQTtFQUNBLHlCRDlDUTtFQ2dEUixRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBT0EsaUNBQUE7RUFDQSx3QkFBQTtFQUdBLFVBQUE7QUFuQko7QUFVSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJOO0FBZ0JJO0VBQ0UseUJBQUE7QUFkTjtBQWlCSTtFQUNFLHlCQUFBO0FBZk4iLCJmaWxlIjoibm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DaGFuZ2luZyBidWxtYSB2YXJpYWJsZXMgYW5kIGFkZGluZyBnbG9iYWwgc3R5bGVzXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6ICNhNTlhZDc7XHJcbiRwaW5rOiAjNDY4MmI0O1xyXG4kYmx1ZTogI2ZmNjM0NztcclxuXHJcbiRsaWdodC1yZWQ6ICNmZmYzZjM7XHJcbiRsaWdodDogI2ZhZmNmZjtcclxuXHJcbiRncmVlbjogcmdiKFxyXG4gIDQ3LFxyXG4gIDEyOCxcclxuICAwXHJcbik7IC8vYnVsbWEgYXV0b21hdGljYWxseSB0YWtlcyBncmVlbiB2YXJpYWJsZSB0byBjb2xvciBpcy1zdWNjZXNzIHByb3BlcnR5XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkYmx1ZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmM2Y1ZmE7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vLyBHbG9iYWwgU3R5bGVzXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAvL3NldCB0aGUgZGVmYXVsdCBmb250LXNpemUgdG8gMThweFxyXG4gIGZvbnQtc2l6ZTogMThweCBpICFpbXBvcnRhbnQ7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAxOHB4IGkgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubm90ZS1jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xufVxuLm5vdGUtY2FyZC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyOmhvdmVyIC54LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLm5vdGUtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhNTlhZDc7XG59XG4ubm90ZS1jYXJkLWNvbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzU1NTtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLWJvZHkgLmZhZGUtb3V0LXRydW5jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgNTAlLCB3aGl0ZSAxMDAlKTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC54LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNmMztcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbiAgdHJhbnNmb3JtOiAwLjJzIGVhc2Utb3V0O1xuICBvcGFjaXR5OiAwO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLngtYnV0dG9uIC5pY29uIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLngtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTllOTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC54LWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYWRhO1xufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-layout/main-layout.component */ "0kqm");
/* harmony import */ var _components_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/note-details/note-details.component */ "zvtM");
/* harmony import */ var _components_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notes-list/notes-list.component */ "mXHW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: "", component: _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"], children: [
            { path: "", component: _components_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"] },
            { path: 'new', component: _components_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__["NoteDetailsComponent"] },
            { path: ':id', component: _components_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_2__["NoteDetailsComponent"] }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zvtM":
/*!*******************************************************************!*\
  !*** ./src/app/components/note-details/note-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/note.model */ "FdGA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class NoteDetailsComponent {
    constructor(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //we need to find out whether we r creating a new note or editing an exisitng one
        this.route.params.subscribe((params) => {
            this.note = new src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_0__["Note"]();
            if (params.id) {
                this.note = this.noteService.get(params.id);
                this.noteId = params.id;
                this.new = false;
            }
            else {
                this.new = true;
            }
        });
    }
    onSubmit(form) {
        if (this.new) {
            // console.log(form);
            //we need to save the note
            this.noteService.add(form.value);
        }
        else {
            this.noteService.update(this.noteId, form.value.title, form.value.body);
        }
        this.router.navigateByUrl("/");
    }
    cancel() {
        this.router.navigateByUrl("/");
    }
}
NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) { return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteDetailsComponent, selectors: [["app-note-details"]], decls: 21, vars: 3, consts: [[1, "form-container"], [3, "ngSubmit"], ["noteForm", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModel"], ["name", "body", "required", "", 1, "textarea", 3, "ngModel"], [1, "field", "is-grouped", "is-pulled-right"], ["type", "button", 1, "button", "is-text", 3, "click"], ["type", "submit", 1, "button", "is-success", 3, "disabled"]], template: function NoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteDetailsComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.note.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.note.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 50px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus, textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 0px 2px rgba(255, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUtFOztFQUVFLGlCQUFBO0FBRko7O0FBSUk7O0VBQ0UsZ0RBQUE7QUFETiIsImZpbGUiOiJub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIC8vdGhpcyBtZWFucyBpZiB0aGUgZWxlbWVudCBpcyB0b3VjaGVkIGFuZCBhbHNvIGludmFsaWQgKG5vIGRhdGEgZ2l2ZW4pXHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEocmVkLCAwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map