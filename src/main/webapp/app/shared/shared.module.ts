import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    SpringBootWithJhipsterAppSharedLibsModule,
    SpringBootWithJhipsterAppSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [SpringBootWithJhipsterAppSharedLibsModule, SpringBootWithJhipsterAppSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [SpringBootWithJhipsterAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringBootWithJhipsterAppSharedModule {
    static forRoot() {
        return {
            ngModule: SpringBootWithJhipsterAppSharedModule
        };
    }
}
