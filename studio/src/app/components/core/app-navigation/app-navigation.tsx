import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'app-navigation',
  styleUrl: 'app-navigation.scss',
  shadow: false
})
export class AppNavigation {

  @Prop({connect: 'ion-menu-controller'}) lazyMenuController!: HTMLIonMenuControllerElement;

  @Prop() logo: boolean = false;
  @Prop() menuToggle: boolean = true;

  @Prop() user: boolean = true;

  @Prop() presentation: boolean = false;
  @Prop() publish: boolean = false;

  render() {
    return (<ion-header>
          <ion-toolbar>
            {this.renderLogo()}
            {this.renderMenuToggle()}
            {this.renderUser()}
          </ion-toolbar>
        </ion-header>
    );
  }

  private renderLogo() {
    if (this.logo) {
      return <ion-title slot="start">
        <ion-anchor href="/" routerDirection="forward">
          <div>
            <app-logo></app-logo>
            <span text-uppercase>DeckDeckGo</span>
          </div>
        </ion-anchor>
      </ion-title>;
    } else {
      return null;
    }
  }

  private renderMenuToggle() {
    if (this.menuToggle) {
      return <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button>
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>;
    } else {
      return null;
    }
  }

  private renderUser() {
    if (this.user) {
      return <div slot="end">
        {this.renderPresentationButton()}
        {this.renderPublishButton()}

        <a padding-start padding-end>
          <app-avatar src="https://pbs.twimg.com/profile_images/941274539979366400/bTKGkd-O_400x400.jpg"></app-avatar>
        </a>
      </div>;
    } else {
      return null;
    }
  }

  private renderPresentationButton() {
    if (this.presentation) {
      return <ion-button class="presentation" shape="round" href="/editor" routerDirection="forward">
          <ion-label text-uppercase>Write a presentation</ion-label>
        </ion-button>;
    } else {
      return null;
    }
  }

  private renderPublishButton() {
    if (this.publish) {
      return <ion-button class="publish" shape="round" href="/editor" routerDirection="forward">
        <ion-label text-uppercase>Ready to publish?</ion-label>
      </ion-button>;
    } else {
      return null;
    }
  }

}