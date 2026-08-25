// ============================================================
// STATION.axis · Achsen-Engine · D5 der 6D-Matrix
// ============================================================

export const STATION = {
    name: 'STATION.axis',
    status: 'initialisiert',
    layer: 'D5',
    frequency: '12e',
    sequence: '360°',
    achsen: ['W', 'S', 'A', 'D', 'Q', 'R', 'Y', 'C', 'X'],

    init() {
        this.status = 'aktiv';
        this.log('📍 STATION.axis: D5-Matrix aktiviert');
        return this;
    },

    rotate(richtung) {
        const idx = this.achsen.indexOf(richtung);
        if (idx === -1) return { status: 'ungültig', richtung };
        const next = this.achsen[(idx + 1) % this.achsen.length];
        this.log(`🔄 STATION.axis: ${richtung} → ${next}`);
        return { von: richtung, nach: next };
    },

    log(msg) {
        console.log(`[STATION.axis] ${msg}`);
    }
};
