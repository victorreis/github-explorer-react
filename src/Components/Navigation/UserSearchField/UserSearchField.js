import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import { validateGithubUsername } from '../../../Utils/validators';
import './UserSearchField.css';

const UserSearchField = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(true);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (!e.target.value || validateGithubUsername(e.target.value)) {
            setIsValidUsername(true);
        } else {
            setIsValidUsername(false);
        }
    };
    const classes = ['mr-sm-2', isValidUsername ? '' : 'is-invalid'];

    const handleSearch = () => {
        history.push(username);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="user-search-field-container">
            <FormControl
                type="text"
                placeholder="Search"
                className={classes.join(' ')}
                value={username}
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
            />
            <Button
                variant="primary"
                onClick={handleSearch}
                disabled={!username || !isValidUsername}>
                <BsSearch className="bold" />
            </Button>
        </div>
    );
};

export default UserSearchField;
