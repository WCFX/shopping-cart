import React from 'react';

  const data = [
    {
      id: '1', 
      food: 'Água sem gás',
      price: 'R$ 3.00'
    },
    {
      id: '2',
      food: 'Xis-Burguer',
      price: '39.90',
      sideDish: [
        {
          condition: 'Prensado na Chapa',
          price: '0.00'
        },
        {
          condition: 'Normal',
          price: '0.00'
        }
      ]
    },
    {
      id: '3', 
      food: 'Esfirra',
      price: '4.00',
      sideDish: [
        {
          condition: 'Primenta',
          price: '0.00'
        },
        {
          condition: 'Dobro de queijo',
          price: '2.00'
        }
      ]
    },
    {
      id: '4',
      food: 'Combo da semana',
      price: 'R$ 25.00'
    },
    {
      id: '5',
      food: 'Duplo de coração',
      price: '15.00',
      sideDish: [
        {
          condition: 'Prensado na Chapa',
          price: '0.00'
        },
        {
          condition: 'Acompanha molho barbecue',
          price: 0.00
        },
        {
          condition: 'Pimenta',
          price: '0.00'
        }
      ]
    },
    {
      id: '6',
      food: 'King Supreme',
      price: '40.00',
      sideDish: [
        {
          condition: 'Acompanha molho supreme',
          price: '0.00'
        },
        {
          condition: 'Acompanha molho barbecue',
          price: '0.00'
        },
        {
          condition: 'Acompanha Fritas',
          price: '0.00'
        }
      ]
    }
  ]

export default data;