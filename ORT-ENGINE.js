// ============================================================
// ORT-ENGINE · ACHSE · ENGINE · ANTRIEB · MOTOR
// ============================================================
// Enthält: ORT-MASTER · AXIOM2 · STATION · use · user · AIR whrl over
// ============================================================

import { ORT_ROUTER } from './router.js';
import { ORT_NAV } from './nav.js';
import { AXIOM2 } from './AXIOM2.service.js';
import { STATION } from './STATION.axis.js';
import { USE } from './use/use.js';
import { USER } from './user/user.js';
import { AIR6D_MOVE } from './AIR6D_MOVE.js';

// ─── ORT-ENGINE ──────────────────────────────────────────────
export const ORT_ENGINE = {
    name: 'ORT-ENGINE',
    version: '2.0',
    status: 'initialisiert',

    // Module
    master: null,
    router: ORT_ROUTER,
    nav: ORT_NAV,
    axiom2: AXIOM2,
    station: STATION,
    use: USE,
    user: USER,
    air: AIR6D_MOVE,

    // ─── boot() ────────────────────────────────────────────────
    async boot() {
        this.log('🚀 ORT-ENGINE: Starte...');

        // 1. STATION (Achsen-Engine)
        this.station.init?.();
        this.log('📍 STATION.axis aktiv (D5)');

        // 2. AXIOM2 (Meta-Logik)
        this.axiom2.init?.();
        this.log('🌀 AXIOM2 aktiv');

        // 3. AIR whrl over (Oszillation)
        this.air.init?.();
        this.log('🌪️ AIR whrl over aktiv');

        // 4. use (neutrales Modul)
        this.use.init?.();
        this.log('🔧 use aktiv (neutral, frei)');

        // 5. user (Benutzer-Flow)
        this.user.init?.();
        this.log('👤 user aktiv');

        // 6. Router laden
        await this.router.loadUser();
        this.log('📡 Router geladen');

        // 7. Navigation aktivieren
        this.nav();
        this.log('🧭 Navigation aktiv');

        // 8. Startzone
        this.router.go('home');
        this.log('🏠 Startzone: home');

        this.status = 'aktiv';
        this.log('✅ ORT-ENGINE · KOMPLETT AKTIV');
        return this.status;
    },

    // ─── log() ──────────────────────────────────────────────────
    log(entry) {
        const zeit = new Date().toISOString();
        console.log(`[ORT-ENGINE] ${entry}`);
    },

    // ─── status() ──────────────────────────────────────────────
    status() {
        return {
            name: this.name,
            status: this.status,
            modules: ['STATION', 'AXIOM2', 'AIR', 'use', 'user', 'ROUTER', 'NAV'],
            station: this.station?.status || 'inaktiv',
            axiom2: this.axiom2?.status || 'inaktiv',
            air: this.air?.status || 'inaktiv',
            use: this.use?.status || 'inaktiv',
            user: this.user?.status || 'inaktiv'
        };
    }
};

// ─── AUTO-BOOT ──────────────────────────────────────────────────
ORT_ENGINE.boot();

export { ORT_ENGINE };
