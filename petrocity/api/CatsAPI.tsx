import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'; 

type Cat = {
    url: string;
};

const CatsView = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [error, setError] = useState<string | null>(null);
    


    const fetchCats = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');

            if(!response.ok) {
                throw new Error('Failed to fetch cats'); 
            }

            const data: Cat[] = await response.json();
            setCats(data);
        } catch(err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        }
    };

    useEffect(() => {
        fetchCats();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f8f8f8',
            paddingHorizontal: 10,
            paddingTop: 20,
        }, 
        title: {
            fontSize: 24, 
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
        },
        error: {
            color: 'red',
            fontSize: 16,
            textAlign: 'center',
          },
          image: {
            width: '100%',
            height: 200,
            marginBottom: 10,
            borderRadius: 10,
          },
    })

};

export default CatsView;
