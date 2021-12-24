import PropTypes from 'prop-types';

const HeaderPropTypes = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

HeaderPropTypes.defaultProps = {
    title: 'Task Tracker',
}

HeaderPropTypes.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeaderPropTypes;
