function Mail({ email, subject = '', body = '', children }) {
    let params = subject || body ? '?' : '';

    if (subject) params += `subject=${encodeURIComponent(subject)}`;

    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
        <button>
            <a href={`mailto:${email}${params}`}>{children}</a>
        </button>
    )
}

export default Mail