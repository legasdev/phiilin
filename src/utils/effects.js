import { useState, useEffect } from 'react';

// Создание объекта портала
export const useCreatePoral = (fn) => {
    const [root] = useState(document.createElement('div'));

    useEffect(() => {
        document.querySelector('#portals').appendChild(root);

        fn && fn(true);

        return () => {
            document.querySelector('#portals').removeChild(root);
        };
    }, [root, fn]);

    return root;
};