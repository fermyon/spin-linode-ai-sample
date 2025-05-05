import { defineStore } from 'pinia'

export interface User {
    id: number,
    firstName: string
    lastName: string
    age: string
    gender: 'Male' | 'Female'
    nationality: string
    purchaseHistory: Array<string>
}

export const useUserStore = defineStore('users', {
    state: () => {
        return {
            users: [
                {
                    id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    age: '32',
                    gender: 'Male',
                    nationality: 'American',
                    purchaseHistory: [
                        'Wireless Mouse',
                        'Smartphone',
                        'Wristwatch',
                        'Bookshelf'
                    ]
                },
                {
                    id: 2,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    age: '28',
                    gender: 'Female',
                    nationality: 'British',
                    purchaseHistory: [
                        'Bluetooth Speaker',
                        'Yoga Mat',
                        'Backpack',
                        'Vacuum Cleaner',
                        'Fitness Tracker'
                    ]
                },
                {
                    id: 3,
                    firstName: 'Carlos',
                    lastName: 'Gomez',
                    age: '45',
                    gender: 'Male',
                    nationality: 'Spanish',
                    purchaseHistory: [
                        'Gaming Keyboard',
                        'Laptop',
                        'Coffee Maker',
                        'Desk Chair'
                    ]
                },
                {
                    id: 4,
                    firstName: 'Aiko',
                    lastName: 'Tanaka',
                    age: '37',
                    gender: 'Female',
                    nationality: 'Japanese',
                    purchaseHistory: [
                        'Running Shoes',
                        'Sunglasses',
                        'Electric Kettle',
                        'Table Lamp',
                        'Cookware Set'
                    ]
                },
                {
                    id: 5,
                    firstName: 'Luke',
                    lastName: 'Conner',
                    age: '25',
                    gender: 'Male',
                    nationality: 'Irish',
                    purchaseHistory: [
                        'Headphones',
                        'Electric Scooter',
                        'Wireless Mouse',
                        'Bluetooth Speaker'
                    ]
                }
            ]
        }
    }
})