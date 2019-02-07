import { NgModule } from '@angular/core';

import { SpringBootWithJhipsterAppSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringBootWithJhipsterAppSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringBootWithJhipsterAppSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringBootWithJhipsterAppSharedCommonModule {}
