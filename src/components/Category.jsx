import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import shopData from "../shopData.json";
import { useParams, NavLink } from "react-router-dom";
import RecentlyViewed from "./RecentlyViewed";
import { Fragment } from "react";
import "../styles/Category.css"

const MapItem = ({ value }) => {
    return value.map((item) => (
        <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            color={item.color}
            size={item.size}
            image={item.img}
        />
    ));
};

const Category = ({ name }) => {
    const { filter } = useParams();
    if (name === "furniture") {
        if (filter !== undefined) {
            return (
                <div>
                    <p className="catgryHdr">Furniture</p>
                    <nav className="filterNav">
                        <NavLink to="/furniture">All</NavLink>
                        <NavLink to="/furniture/chairs">Chairs</NavLink>
                        <NavLink to="/furniture/table">Table</NavLink>
                        <NavLink to="/furniture/other">Other</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            <MapItem value={shopData[name][filter]} />
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="catgryHdr">Furniture</p>
                    <nav className="filterNav">
                        <NavLink to="/furniture">All</NavLink>
                        <NavLink to="/furniture/chairs">Chairs</NavLink>
                        <NavLink to="/furniture/table">Table</NavLink>
                        <NavLink to="/furniture/other">Other</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            {shopData.furniture.chairs.map((item, index) => {
                                return (
                                    <Fragment key={item.id}>
                                        <ItemCard
                                            key={item.id}
                                            name={item.name}
                                            price={item.price}
                                            id={item.id}
                                            image={item.img}
                                        />
                                        {shopData.furniture.table[index] && (
                                            <ItemCard
                                                key={shopData.furniture.table[index].id}
                                                id={shopData.furniture.table[index].id}
                                                name={shopData.furniture.table[index].name}
                                                price={shopData.furniture.table[index].price}
                                                image={shopData.furniture.table[index].img}
                                            />
                                        )}
                                        {shopData.furniture.other[index] && (
                                            <ItemCard
                                                key={shopData.furniture.other[index].id}
                                                id={shopData.furniture.other[index].id}
                                                name={shopData.furniture.other[index].name}
                                                price={shopData.furniture.other[index].price}
                                                image={shopData.furniture.other[index].img}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        }
    } else if (name === "clothing") {
        if (filter !== undefined) {
            return (
                <div>
                    <p className="catgryHdr">Clothing</p>
                    <nav className="filterNav">
                        <NavLink to="/clothing">All</NavLink>
                        <NavLink to="/clothing/men">Men</NavLink>
                        <NavLink to="/clothing/women">Women</NavLink>
                        <NavLink to="/clothing/unisex">Unisex</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            <MapItem value={shopData[name][filter]} />
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="catgryHdr">Clothing</p>
                    <nav className="filterNav">
                        <NavLink to="/clothing">All</NavLink>
                        <NavLink to="/clothing/men">Men</NavLink>
                        <NavLink to="/clothing/women">Women</NavLink>
                        <NavLink to="/clothing/unisex">Unisex</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            {shopData.clothing.men.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ItemCard
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            color={item.color}
                                            size={item.size}
                                            image={item.img}
                                        />
                                        {shopData.clothing.women[index] && (
                                            <ItemCard
                                                key={shopData.clothing.women[index].id}
                                                id={shopData.clothing.women[index].id}
                                                name={shopData.clothing.women[index].name}
                                                price={shopData.clothing.women[index].price}
                                                color={shopData.clothing.women[index].color}
                                                size={shopData.clothing.women[index].size}
                                                image={shopData.clothing.women[index].img}
                                            />
                                        )}
                                        {shopData.clothing.unisex[index] && (
                                            <ItemCard
                                                key={shopData.clothing.unisex[index].id}
                                                id={shopData.clothing.unisex[index].id}
                                                name={shopData.clothing.unisex[index].name}
                                                price={shopData.clothing.unisex[index].price}
                                                color={shopData.clothing.unisex[index].color}
                                                size={shopData.clothing.unisex[index].size}
                                                image={shopData.clothing.unisex[index].img}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        }
    } else if (name === "shoes") {
        if (filter !== undefined) {
            return (
                <div>
                    <p className="catgryHdr">Shoes</p>
                    <nav className="filterNav">
                        <NavLink to="/shoes">All</NavLink>
                        <NavLink to="/shoes/men">Men</NavLink>
                        <NavLink to="/shoes/women">Women</NavLink>
                        <NavLink to="/shoes/unisex">Unisex</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            <MapItem value={shopData[name][filter]} />
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="catgryHdr">Shoes</p>
                    <nav className="filterNav">
                        <NavLink to="/shoes">All</NavLink>
                        <NavLink to="/shoes/men">Men</NavLink>
                        <NavLink to="/shoes/women">Women</NavLink>
                        <NavLink to="/shoes/unisex">Unisex</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            {shopData.shoes.unisex.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ItemCard
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            color={item.color}
                                            size={item.size}
                                            image={item.img}
                                        />
                                        {shopData.shoes.women[index] && (
                                            <ItemCard
                                                key={shopData.shoes.women[index].id}
                                                id={shopData.shoes.women[index].id}
                                                name={shopData.shoes.women[index].name}
                                                price={shopData.shoes.women[index].price}
                                                color={shopData.shoes.women[index].color}
                                                size={shopData.shoes.women[index].size}
                                                image={shopData.shoes.women[index].img}
                                            />
                                        )}
                                        {shopData.shoes.men[index] && (
                                            <ItemCard
                                                key={shopData.shoes.men[index].id}
                                                id={shopData.shoes.men[index].id}
                                                name={shopData.shoes.men[index].name}
                                                price={shopData.shoes.men[index].price}
                                                color={shopData.shoes.men[index].color}
                                                size={shopData.shoes.men[index].size}
                                                image={shopData.shoes.men[index].img}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        }
    } else if (name === "skincare") {
        if (filter !== undefined) {
            return (
                <div>
                    <p className="catgryHdr">Skin Care</p>
                    <nav className="filterNav">
                        <NavLink to="/skincare">All</NavLink>
                        <NavLink to="/skincare/cleansers">Cleansers</NavLink>
                        <NavLink to="/skincare/exfoliaters">Exfoliaters</NavLink>
                        <NavLink to="/skincare/masks">Masks</NavLink>
                        <NavLink to="/skincare/moisturisers">Moisturisers</NavLink>
                        <NavLink to="/skincare/toners">Toners</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            <MapItem value={shopData[name][filter]} />
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="catgryHdr">Skin Care</p>
                    <nav className="filterNav">
                        <NavLink to="/skincare">All</NavLink>
                        <NavLink to="/skincare/cleansers">Cleansers</NavLink>
                        <NavLink to="/skincare/exfoliaters">Exfoliaters</NavLink>
                        <NavLink to="/skincare/masks">Masks</NavLink>
                        <NavLink to="/skincare/moisturisers">Moisturisers</NavLink>
                        <NavLink to="/skincare/toners">Toners</NavLink>
                    </nav>
                    <div className="cardContainer">
                        <div className="mainProducts">
                            {shopData.skincare.cleansers.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ItemCard
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            image={item.img}
                                        />
                                        {shopData.skincare.exfoliaters[index] && (
                                            <ItemCard
                                                key={shopData.skincare.exfoliaters[index].id}
                                                id={shopData.skincare.exfoliaters[index].id}
                                                name={shopData.skincare.exfoliaters[index].name}
                                                price={shopData.skincare.exfoliaters[index].price}
                                                image={shopData.skincare.exfoliaters[index].img}
                                            />
                                        )}
                                        {shopData.skincare.masks[index] && (
                                            <ItemCard
                                                key={shopData.skincare.masks[index].id}
                                                id={shopData.skincare.masks[index].id}
                                                name={shopData.skincare.masks[index].name}
                                                price={shopData.skincare.masks[index].price}
                                                image={shopData.skincare.masks[index].img}
                                            />
                                        )}
                                        {shopData.skincare.moisturisers[index] && (
                                            <ItemCard
                                                key={shopData.skincare.moisturisers[index].id}
                                                id={shopData.skincare.moisturisers[index].id}
                                                name={shopData.skincare.moisturisers[index].name}
                                                price={shopData.skincare.moisturisers[index].price}
                                                image={shopData.skincare.moisturisers[index].img}
                                            />
                                        )}
                                        {shopData.skincare.toners[index] && (
                                            <ItemCard
                                                key={shopData.skincare.toners[index].id}
                                                id={shopData.skincare.toners[index].id}
                                                name={shopData.skincare.toners[index].name}
                                                price={shopData.skincare.toners[index].price}
                                                image={shopData.skincare.toners[index].img}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>
                        <RecentlyViewed />
                    </div>
                </div>
            );
        }
    }
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Category;
