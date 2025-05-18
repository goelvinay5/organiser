import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = localStorage;

  constructor() { }

  save<T>(key: string, data: T): void {
    try {
      const serializedData = JSON.stringify(data);
      this.storage.setItem(key, serializedData);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}