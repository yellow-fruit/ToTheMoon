import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { addElement, removeElement, selectElements } from './features/elements/elementsSlice';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const elements = useSelector(selectElements);

    return (
        <div className="App">
            <div className="buttons">
                <button onClick={() => dispatch(addElement())}>Добавить</button>
                <button onClick={() => dispatch(removeElement())}>Удалить</button>
            </div>
            <div className="list">
                <AnimatePresence>
                    {elements.map((color, index) => (
                        <motion.div
                            key={color}
                            initial={{ x: -window.innerWidth }}
                            animate={{ x: 0 }}
                            exit={{ x: window.innerWidth }}
                            transition={{ duration: 0.5 }}
                            className="element"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default App;
