// js/entities/debris/debris.js
class SpaceItem {
    constructor(x, y, speed = 2, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.isActive = true; // State flag to safely manage removal
    }

    // Generic movement that can be overridden if needed
    updatePosition() {
        this.x -= this.speed;
    }

    show() {
        console.warn("show() should be implemented by the child class");
    }

    getBoundingBox() {
        return {
            left: this.x - this.size / 2,
            right: this.x + this.size / 2,
            top: this.y - this.size / 2,
            bottom: this.y + this.size / 2,
        };
    }
}