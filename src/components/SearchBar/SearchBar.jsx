import React from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import s from './style.module.css';

const SearchBar = ({onTextChange, placeholder }) => {
	return (
		<div>
			<SearchIcon size={25} className={s.icon}/>
			<input type='text' className={s.input} onChange={(e) => onTextChange(e.target.value)} placeholder={placeholder} />
		</div>
	)
}

export default SearchBar



