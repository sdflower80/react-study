import PropTypes from 'prop-types';

const HeaderPropTypes = ({title}) => {
    return (
        <header>
            <h1 style={headerStyle}>{title}</h1>
        </header>
    );
};

const headerStyle = {
    color: 'red',
    backgroundColor: 'black'
}

HeaderPropTypes.defaultProps = {
    title: 'Task Tracker',
}

HeaderPropTypes.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeaderPropTypes;
