import { IframeApiContribution, sendToWorkadventure } from "./IframeApiContribution";

export class WorkadventureControlsCommands extends IframeApiContribution<WorkadventureControlsCommands> {
    callbacks = [];

    /**
     *  Disable player controls.
     * {@link https://workadventu.re/map-building/api-controls.md#disabling--restoring-controls | Website documentation}
     */
    disablePlayerControls(): void {
        sendToWorkadventure({ type: "disablePlayerControls", data: undefined });
    }

    /**
     * Restore player controls.
     * {@link https://workadventu.re/map-building/api-controls.md#disabling--restoring-controls | Website documentation}
     */
    restorePlayerControls(): void {
        sendToWorkadventure({ type: "restorePlayerControls", data: undefined });
    }

    /**
     * Disable proximity meetings.
     * {@link https://workadventu.re/map-building/api-controls.md#disabling--restoring-proximity-meeting | Website documentation}
     */
    disablePlayerProximityMeeting(): void {
        sendToWorkadventure({ type: "disablePlayerProximityMeeting", data: undefined });
    }

    /**
     * Restore proximity meettings.
     * {@link https://workadventu.re/map-building/api-controls.md#disabling--restoring-proximity-meeting | Website documentation}
     */
    restorePlayerProximityMeeting(): void {
        sendToWorkadventure({ type: "restorePlayerProximityMeeting", data: undefined });
    }
}

export default new WorkadventureControlsCommands();
