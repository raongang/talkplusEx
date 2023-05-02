const imgBase64 = 'data:image/png;base64,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';

export {imgBase64};