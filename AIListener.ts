/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
//% weight=70 icon="\uf1eb" color=#34bbed block="AI Listener"
namespace customRadio {

    let messageHandler: (message: string) => void;

    /**
     * Check for messages over radio
     */
    //% block
    export function AICheckBluetooth(): void {
        let BLEString = ""
        bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
            let BLEString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        })
        if (messageHandler) {
            messageHandler(BLEString);
        }

    }

    /**
     * Do something when a message is received
     */
    //% block="on received %class"
    export function onBluetoothReceived(handler: (message: string) => void): void {
        messageHandler = handler;
    }
}