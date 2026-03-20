import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreadcrumbItem } from './breadcrumb.model';

const BROADCAST_EVENT = 'acme:mfe-breadcrumb-change';
const STORAGE_KEY = '__acme_breadcrumbs__';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly crumbs = new BehaviorSubject<BreadcrumbItem[]>(this.readInitialState());
  crumbs$ = this.crumbs.asObservable();

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener(BROADCAST_EVENT, (event: Event) => {
      const custom = event as CustomEvent<BreadcrumbItem[]>;
      const payload = Array.isArray(custom.detail) ? custom.detail : [];
      this.crumbs.next(payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    });
  }

  setBreadcrumbs(values: BreadcrumbItem[]) {
    const payload = Array.isArray(values) ? values.slice() : [];
    this.crumbs.next(payload);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      window.dispatchEvent(
        new CustomEvent(BROADCAST_EVENT, {
          detail: payload,
        }),
      );
    }
  }

  private readInitialState() {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}
