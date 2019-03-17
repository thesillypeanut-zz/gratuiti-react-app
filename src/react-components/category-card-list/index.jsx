import React from "react";
import kebabCase from 'lodash-es/kebabCase';

import {BaseReactComponent} from "../base-react-component";
import CategoryCard from '../category-card';
import {CHARITY_CATEGORY_CODE_LIST} from "../../constants";

import './style.css';

export class CategoryCardList extends BaseReactComponent {
    filterState() {
        return {};
    }

    render() {
        const classes = {
            header: {
                color: 'red'
            }
        };
        const getCategoryItems = (category) => (
            CHARITY_CATEGORY_CODE_LIST.filter(char => char['charityTypeEn'] === category).map(
                item => (
                    <li className="category-card-list__item" key={kebabCase(item.descEn)}>
                        <CategoryCard classes={classes} title={item.descEn} blurb={'blurb' in item ? item.blurb : 'SAMPLE BLURB'} />
                    </li>
                ))
        );

        const categories = ['Welfare', 'Health', 'Education', 'Religion', 'Benefits to Community', 'Other'].map(
            category => (
                <div>
                    <h2 className="category-card-list__header">{category}</h2>
                    <img className="category-card-list__image" src={`/images/${kebabCase(category)}.png`} alt={category} />
                    <ul className="category-card-list__list">
                        {getCategoryItems(category)}
                    </ul>
                    <br/><br/><br/>
                </div>
            ));

        return (
            <div className="category-card-list">
                {categories}
            </div>
        );
    }
}
