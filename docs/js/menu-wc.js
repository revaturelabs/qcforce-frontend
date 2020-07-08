'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">qcforce-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2c3497656e40afed1ce66df4d8350b68"' : 'data-target="#xs-components-links-module-AppModule-2c3497656e40afed1ce66df4d8350b68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2c3497656e40afed1ce66df4d8350b68"' :
                                            'id="xs-components-links-module-AppModule-2c3497656e40afed1ce66df4d8350b68"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssessmentGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BatchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchesDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BatchesDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterItemsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MajorGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MajorGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaceGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaceGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RatingGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportsViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReportsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyQuestionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SurveyViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SurveyViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeeklyReportsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeeklyReportsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BatchReportsComponent.html" data-type="entity-link">BatchReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CurriculumComponent.html" data-type="entity-link">CurriculumComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SubnavItemsComponent.html" data-type="entity-link">SubnavItemsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SurveyCreateComponent.html" data-type="entity-link">SurveyCreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SurveyHomeComponent.html" data-type="entity-link">SurveyHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SurveyManageComponent.html" data-type="entity-link">SurveyManageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SurveyScheduleComponent.html" data-type="entity-link">SurveyScheduleComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchFilterChange.html" data-type="entity-link">BatchFilterChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllWeeksOneBatch.html" data-type="entity-link">GetAllWeeksOneBatch</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllWeeksOneBatchFail.html" data-type="entity-link">GetAllWeeksOneBatchFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAllWeeksOneBatchSuccess.html" data-type="entity-link">GetAllWeeksOneBatchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAvgWeekBatch.html" data-type="entity-link">GetAvgWeekBatch</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAvgWeekBatchFail.html" data-type="entity-link">GetAvgWeekBatchFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAvgWeekBatchSuccess.html" data-type="entity-link">GetAvgWeekBatchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBatches.html" data-type="entity-link">GetBatches</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBatchesFail.html" data-type="entity-link">GetBatchesFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetBatchesSuccess.html" data-type="entity-link">GetBatchesSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekAllBatches.html" data-type="entity-link">GetOneWeekAllBatches</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekAllBatchesFail.html" data-type="entity-link">GetOneWeekAllBatchesFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekAllBatchesSuccess.html" data-type="entity-link">GetOneWeekAllBatchesSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekOneBatch.html" data-type="entity-link">GetOneWeekOneBatch</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekOneBatchFail.html" data-type="entity-link">GetOneWeekOneBatchFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetOneWeekOneBatchSuccess.html" data-type="entity-link">GetOneWeekOneBatchSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetQuestions.html" data-type="entity-link">GetQuestions</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetQuestionsFail.html" data-type="entity-link">GetQuestionsFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetQuestionsSuccess.html" data-type="entity-link">GetQuestionsSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetWeeks.html" data-type="entity-link">GetWeeks</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetWeeksFail.html" data-type="entity-link">GetWeeksFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetWeeksSuccess.html" data-type="entity-link">GetWeeksSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadAssociates.html" data-type="entity-link">LoadAssociates</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadAssociatesFail.html" data-type="entity-link">LoadAssociatesFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadAssociatesSuccess.html" data-type="entity-link">LoadAssociatesSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadBatches.html" data-type="entity-link">LoadBatches</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadBatchesFail.html" data-type="entity-link">LoadBatchesFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadBatchesSuccess.html" data-type="entity-link">LoadBatchesSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadQuestions.html" data-type="entity-link">LoadQuestions</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSurveys.html" data-type="entity-link">LoadSurveys</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSurveysFail.html" data-type="entity-link">LoadSurveysFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSurveysSuccess.html" data-type="entity-link">LoadSurveysSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubnavOptionClick.html" data-type="entity-link">SubnavOptionClick</a>
                            </li>
                            <li class="link">
                                <a href="classes/WeekFilterChange.html" data-type="entity-link">WeekFilterChange</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AssociatesEffects.html" data-type="entity-link">AssociatesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchDetailsService.html" data-type="entity-link">BatchDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchEffect.html" data-type="entity-link">BatchEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchesEffects.html" data-type="entity-link">BatchesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchesService.html" data-type="entity-link">BatchesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchListService.html" data-type="entity-link">BatchListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchRequestService.html" data-type="entity-link">BatchRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsEffect.html" data-type="entity-link">ReportsEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsEffects.html" data-type="entity-link">ReportsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsService.html" data-type="entity-link">ReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveyBatchIdService.html" data-type="entity-link">SurveyBatchIdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveysEffects.html" data-type="entity-link">SurveysEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SurveysService.html" data-type="entity-link">SurveysService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WebRequestService.html" data-type="entity-link">WebRequestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Associate.html" data-type="entity-link">Associate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Associate-1.html" data-type="entity-link">Associate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AssociatesState.html" data-type="entity-link">AssociatesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Batch.html" data-type="entity-link">Batch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Batch-1.html" data-type="entity-link">Batch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchesState.html" data-type="entity-link">BatchesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchName.html" data-type="entity-link">BatchName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchState.html" data-type="entity-link">BatchState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartData.html" data-type="entity-link">ChartData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTable.html" data-type="entity-link">ChartTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Criteria.html" data-type="entity-link">Criteria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeaderState.html" data-type="entity-link">HeaderState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Question.html" data-type="entity-link">Question</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuestionState.html" data-type="entity-link">QuestionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportsState.html" data-type="entity-link">ReportsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportsState-1.html" data-type="entity-link">ReportsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Survey.html" data-type="entity-link">Survey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SurveysState.html" data-type="entity-link">SurveysState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SurveysState-1.html" data-type="entity-link">SurveysState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});