// submit.js

export const SubmitButton = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button 
                type="submit" 
                style={{
                    background: 'linear-gradient(to right, #331B6B, #212D7A, #1565AA)',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                    // transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.025)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                Submit
            </button>
        </div>
    );
}
