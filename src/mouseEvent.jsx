export default function MouseEvent() {
    return (
        <h1
            onClick={(e) => console.log('onClick')}
            onMouseEnter={(e) => console.log('onMouseEnter')}
            onMouseOver={(e) => console.log('onMouseOver')}
            onMouseDown={(e) => console.log('onMouseDown')}
            onMouseUp={(e) => console.log('onMouseUp')}
            onMouseLeave={(e) => console.log('onMouseLeave')}
        >
            Click ME
        </h1>
    );
}
