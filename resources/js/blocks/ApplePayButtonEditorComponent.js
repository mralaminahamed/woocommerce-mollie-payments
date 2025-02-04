export const ApplePayButtonEditorComponent = ({ buttonAttributes = {} }) => {
    const style = {
        height: `${buttonAttributes.height || 48}px`,
        borderRadius: `${buttonAttributes.borderRadius || 4}px`
    }

    return (
        <button
            id="mollie_applepay_button"
            className="apple-pay-button apple-pay-button-black"
            style={style}
        >
        </button>
    );
};
export default ApplePayButtonEditorComponent;
