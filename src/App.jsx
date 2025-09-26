import React from 'react';

// === CONSTANTES GLOBALES ===
// Reemplaza el contenido de esta constante con el código Base64 de tu propio logo.
const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX////rABn33N+Ch4/rAADqAADqABTqAAvrABzqAAP7+/vuw8jqACf//v/66uvtZ3HxtbbzmaPsREj32d30w8vtbnT2zM/wjo/31dfylJfsPkbxlprzmJzsgIjvgYryhYntd4L0vMHrEx/sMDzvh4v78fPwgYk7tNttAAAFK0lEQVR4nO2d63aqMBCFB4VEQUUFBRUUxPr+n/H0CGFb01w2yUTu+f749F1TmyS5SSAZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgywS2RyuDSsHyWpD81vAcTPv1V7G812yZt+F5jL5fT/g5gssQfk7m5Xg2j++XeB5geS8o+U3h+YB2+6/w9xksS/h5ke+X/B6j3/83eH6V5xUu+X3B4zL9/lHh9wKWS1j+u7z/hDym33/n8h4wLEv4ecnrNzwO0/cPS353gWWJ/xXvb3g5pl+k3r9h+d3Ocx0u+V3I6y/9fk/yr/T7PZ5f5vlJlbx/zOsV/X6D33+Z35eQ75f85mD9fn+R78/4PcfzQ/y+WvJnF7/f8H2G5y/J9wv9/hC/r/J9W/JnF//P+D2I5//lu0X+/wr/BwzPN/l+kR/g5WJ4fp/vV/r9AX5e4vl1fq/y/Qf/s8zzM3xfyZ9T/B/Lcx/Ld1n+X+L3LczzE3y/kR9wLMPzZ3y/kO+X/F7L9/f4fYnnL54v8H3Z8p+f4/kY3//L97P8X8VzDcsfke8V+f3I89d8v8nzE/1+h++X/MZh/X6I3+e4/jfL/pT571d4v5vnT8Tz/fi+mfyZxvNN/v4kv0f4vZT5c8j3Wf7+gN9zLD8s39f4Pcn3rPxZw+9JvP8w3xf5/sv3Xf6e4Pltfr/J95H8GcNzH8/Py/dKfg/y+0y/P/L9n+VXOf8T+T2N/4v8/p/vX/n/nvwZwvNb/o/xfyLff+X/S+VvNf7P8v0q3+f4Pcn3a/w/hOdf+b+D//O+3yv+D/I94v8U30+Vv7v4fyr/z+X/f7535c8e/k98v1f8H+X7NP4v5Pcq/9/m+2e+j+T3EP8/5PtL/s/zfZnvU/6fxv+D/H6d/+f5fpXvY/wfy/cR/8+yv+H/PP5P5vsa/wfy/S7/P/n+jN+T/P6Z/5/m/0/+T2L+JPMnne+90F57Ie2434L29fBvT5/N1324X1/4G/x19Hn73gq/L2c28qWc2Uj3R7+Xj+445D1rUbfz+Uu/h6/7/i6/n/nLvy9j1vH7532/vB/v5c/93Cffl7Pr+P3yv1/++0s/r1lP1vH7iX2/fD9b1vP74X6/+X5c2cl9v3w/t4/fM+374f28fD97sZ7fC/f95n4hD/N74X72Yj6/3a+/l+8h/n67x2/t+m54/kF9v+r2OQ2+31P9Hh3fb6l+T43vl813xRzPVxXfVfB8ZfNdAc9/k++KOP6evFcUz1/I963F9+7D85vE+37g+T3B9/XN8wzPd/l+p9+j3G/w9xt+r0++v8Dz91T/d77fVP2O+X1T9c/y+6rqJ3p+V1U/yf/T237J77v+j/N7V//n+n1R/4vvt+r/Vb+P6/+J71P9J0u+x/SfhO8z3W+v/uR8v+v/I3w/1f+f/1/l9zD/x/p9TP+P9v0y/7fV/xG+z3P/pvqf5vdE/m9j/zfw/Z78Geqf+P+G/E/9z+v7VP8P+D+f/9uaf2P9T2P+jPXPu3+r/s/V/zn+j/T7jPrn+322fuaf5f/x+9uV/zP9P/l++f3vVP7v9P88f2f/32r/z/H703/+9L9Z/7sO31/p/8vt38/+T4n/9/M/lO9l/zfyP57/M/k+w/+b/D6d/zO+v9L/Sfyfxv+R/J7G/5P8/rX/T/J7EP8v8n2F/wv5/of/k/xew/+ZfH/I/wv8HsPzM/h/me+T/H6B7//L91X+z/I9wvMr/p/O9yn+n8v3J3y/k/xZwvOr/H+M5xf5vYvn7+T7J/+nL/8j3zfyewzPz+H3TP6e4/l5vr/J7238nuP5Ofy+w/Pf+H2a35vwZwvPb/l+we/Z+f0S3y/5Pcnvg+V3+H2G/7v8fplfw/A8TP/P8vsS3wfLbyO/m+H5d/L9At8/wPMrvK/Jby/D8xDd/yPfp+T/X/L3X/LzG/m/p1+A6f8N2+8t/HkC91fyH8LzM6L/Jfy8hvtr/FfWf239f/p+f1P/x93/Pfr3y3+X/lfw913+y3T/q3/p+yP5D/n9W/y9Vf9T/L2T/+cPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjT/wB8E1g+8e3t+wAAAABJRU5ErkJggg==";

// === HELPERS Y DATOS DE EJEMPLO ===

// Helper para formatear números como moneda (USD para consistencia interna)
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

// Helper para obtener el número de semana del año
const getWeekNumber = (d) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getUTCFullYear(), weekNo];
};

// SIMULADOR de API de tipo de cambio histórico.
const getHistoricalExchangeRate = async (dateString) => {
    const baseRate = 950;
    const date = new Date(dateString);
    const variation = (date.getTime() % 100) / 100 * 50;
    return Promise.resolve(baseRate + variation);
};

// Helper para parsear fechas en formato DD/MM/YYYY a YYYY-MM-DD
const parseDate = (dateString) => {
    if (!dateString) return null;
    const parts = dateString.split('/');
    if (parts.length === 3) {
        // new Date(year, monthIndex, day)
        return new Date(parts[2], parts[1] - 1, parts[0]).toISOString().split('T')[0];
    }
    return null;
};

// Helper para parsear montos en formato "$ 1.234,56" o "1,234.56"
const parseAmount = (amountString) => {
    if (typeof amountString !== 'string') return 0;
    // Handles both ARS format "$ 1.234,56" and standard "1234.56"
    return parseFloat(amountString.replace(/[^0-9,-]/g, '').replace('.', '').replace(',', '.'));
};

// === COMPONENTES DE LA UI ===

const StatCard = ({ title, value, color = 'text-gray-200' }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full">
    <h3 className="text-sm font-medium text-gray-400">{title}</h3>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const CompanySelector = ({ companies, activeCompanies, toggleCompany }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-300">Seleccionar Empresas</h3>
        <div className="flex flex-wrap gap-4">
            {Object.keys(companies).map(companyName => (
                <button
                    key={companyName}
                    onClick={() => toggleCompany(companyName)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm
                        ${activeCompanies.has(companyName) ? 'bg-cyan-500 text-white shadow-md' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                    {companyName}
                </button>
            ))}
        </div>
    </div>
);

const InitialBalanceManager = ({ companiesData, onUpdateAllBalances }) => {
    const [localBalances, setLocalBalances] = React.useState({});

    React.useEffect(() => {
        const initial = {};
        if (Object.keys(companiesData).length > 0) {
            Object.entries(companiesData).forEach(([name, data]) => {
                initial[name] = data.initialBalance || 0;
            });
            setLocalBalances(initial);
        }
    }, [companiesData]);

    const handleLocalChange = (companyName, value) => {
        setLocalBalances(prev => ({
            ...prev,
            [companyName]: value
        }));
    };
    
    const handleUpdateClick = () => {
        const numericBalances = {};
        Object.keys(localBalances).forEach(name => {
            numericBalances[name] = parseFloat(localBalances[name]) || 0;
        });
        onUpdateAllBalances(numericBalances);
    };

    if (Object.keys(companiesData).length === 0) return null;

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Saldos Iniciales por Empresa (USD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(companiesData).map(name => (
                    <div key={name}>
                        <label className="text-sm font-medium text-gray-400 block mb-1">{name}</label>
                        <div className="relative">
                           <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                           <input
                                type="number"
                                value={localBalances[name] ?? ''}
                                onChange={(e) => handleLocalChange(name, e.target.value)}
                                className="w-full bg-gray-900 rounded p-2 pl-7 focus:ring-cyan-500 focus:outline-none"
                                placeholder="0.00"
                           />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handleUpdateClick}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                    Actualizar Flujo de Caja
                </button>
            </div>
        </div>
    );
};

const ScenarioToggle = ({ title, description, isActive, onToggle }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between h-full">
        <div>
            <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button 
            onClick={onToggle} 
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 ${isActive ? 'bg-cyan-500' : 'bg-gray-600'}`}
        >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${isActive ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
    </div>
);

const AddFixedExpenseModal = ({ isOpen, onClose, onSave, companies, expenseToEdit }) => {
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [startDate, setStartDate] = React.useState(new Date().toISOString().split('T')[0]);
    const [allocations, setAllocations] = React.useState({});
    const [error, setError] = React.useState('');
    const isEditing = !!expenseToEdit;

    React.useEffect(() => {
        if (isOpen) {
            if(isEditing) {
                setDescription(expenseToEdit.description);
                setAmount(expenseToEdit.amount);
                setStartDate(expenseToEdit.startDate);
                setAllocations(expenseToEdit.allocations);
            } else {
                setDescription('');
                setAmount('');
                setStartDate(new Date().toISOString().split('T')[0]);
                setAllocations(Object.keys(companies).reduce((acc, comp) => ({ ...acc, [comp]: 0 }), {}));
            }
            setError('');
        }
    }, [isOpen, expenseToEdit, companies]);
    
    const handleAllocationChange = (company, value) => {
        const newAllocations = { ...allocations, [company]: parseInt(value, 10) || 0 };
        setAllocations(newAllocations);
    };

    const handleSubmit = () => {
        const totalAllocation = Object.values(allocations).reduce((sum, val) => sum + val, 0);
        if (!description || !amount || !startDate) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        if (totalAllocation !== 100) {
            setError(`La suma de las asignaciones debe ser 100%, no ${totalAllocation}%.`);
            return;
        }
        onSave({ 
            id: isEditing ? expenseToEdit.id : `fe-${Date.now()}`, 
            description, 
            amount: parseFloat(amount), 
            startDate, 
            allocations 
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">{isEditing ? 'Editar' : 'Añadir'} Gasto Fijo Mensual</h2>
                {error && <p className="bg-red-900 text-red-300 p-2 rounded-md mb-4 text-sm">{error}</p>}
                <div className="space-y-4">
                    <input type="text" placeholder="Descripción (Ej: Alquiler Oficina)" value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-gray-900 rounded p-2 focus:ring-cyan-500 focus:outline-none" />
                    <input type="number" placeholder="Monto Mensual Total (USD)" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-gray-900 rounded p-2 focus:ring-cyan-500 focus:outline-none" />
                    <div>
                        <label className="text-sm text-gray-400">Fecha del primer pago</label>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full bg-gray-900 rounded p-2 focus:ring-cyan-500 focus:outline-none" />
                    </div>
                    <div>
                        <h3 className="text-lg text-gray-300 mb-2">Asignación por Empresa (%)</h3>
                        {Object.keys(companies).map(comp => (
                            <div key={comp} className="flex items-center justify-between mb-2">
                                <label className="text-gray-400">{comp}</label>
                                <input type="number" value={allocations[comp] || 0} onChange={e => handleAllocationChange(comp, e.target.value)} className="w-1/3 bg-gray-900 rounded p-2 text-center focus:ring-cyan-500 focus:outline-none" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                    <button onClick={handleSubmit} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">Guardar Cambios</button>
                </div>
            </div>
        </div>
    );
};

const OverdueInvoicesModal = ({ isOpen, onClose, onConfirm, invoices, onGenerateEmail, isGeneratingEmail }) => {
    const [dueDates, setDueDates] = React.useState({});

    React.useEffect(() => {
        if (invoices.length > 0) {
            const defaultDate = new Date();
            defaultDate.setDate(defaultDate.getDate() + 15);
            const defaultDateStr = defaultDate.toISOString().split('T')[0];
            const initialDates = {};
            invoices.forEach(inv => {
                initialDates[inv.factura_id] = defaultDateStr;
            });
            setDueDates(initialDates);
        }
    }, [invoices]);

    if (!isOpen) return null;

    const handleDateChange = (id, date) => {
        setDueDates(prev => ({ ...prev, [id]: date }));
    };
    
    const originalDueDate = (dateStr) => {
        const parts = dateStr.split('/');
        if (parts.length === 3) return `${parts[0]}/${parts[1]}/${parts[2]}`;
        return dateStr;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-cyan-400 mb-2">Facturas Vencidas Detectadas</h2>
                <p className="text-gray-400 mb-4">Por favor, asigna una nueva fecha de cobro/pago estimada para continuar.</p>
                <div className="max-h-96 overflow-y-auto pr-4">
                    {invoices.map(inv => (
                        <div key={inv.factura_id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-2 bg-gray-900 p-3 rounded">
                            <div className="md:col-span-2">
                                <p className="font-semibold text-white truncate" title={inv.factura_id}>{inv.factura_id}</p>
                                <p className="text-sm text-gray-400 truncate" title={inv.razonSocial}>{inv.razonSocial}</p>
                                <p className="text-sm text-red-400 mt-1">Venció: {originalDueDate(inv.fecha_vencimiento_original)}</p>
                            </div>
                            <p className="font-mono text-lg text-cyan-300 text-left md:text-center">{formatCurrency(inv.monto_usd)}</p>
                            <input
                                type="date"
                                value={dueDates[inv.factura_id] || ''}
                                onChange={e => handleDateChange(inv.factura_id, e.target.value)}
                                className="bg-gray-700 rounded p-2 focus:ring-cyan-500 focus:outline-none"
                            />
                            <button
                                onClick={() => onGenerateEmail(inv)}
                                disabled={isGeneratingEmail === inv.factura_id}
                                className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center disabled:bg-gray-500 disabled:cursor-wait transition-colors"
                            >
                                {isGeneratingEmail === inv.factura_id ? (
                                     <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : '✨ Redactar Email'}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-6">
                    <button onClick={() => onConfirm(dueDates)} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">Confirmar Fechas y Cargar</button>
                </div>
            </div>
        </div>
    );
};

const EmailDraftModal = ({ isOpen, onClose, subject, body }) => {
    const [emailBody, setEmailBody] = React.useState(body);
    const [copySuccess, setCopySuccess] = React.useState('');

    React.useEffect(() => {
        setEmailBody(body);
        setCopySuccess('');
    }, [body]);

    if (!isOpen) return null;

    const handleCopy = () => {
        const contentToCopy = `Asunto: ${subject}\n\n${emailBody}`;
        navigator.clipboard.writeText(contentToCopy).then(() => {
            setCopySuccess('¡Copiado!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, () => {
            setCopySuccess('Error al copiar');
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-teal-400 mb-4">✨ Borrador de Email de Cobranza</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-400">Asunto</label>
                        <input type="text" readOnly value={subject} className="w-full bg-gray-900 rounded p-2 mt-1 focus:ring-teal-500 focus:outline-none cursor-not-allowed" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Cuerpo del Mensaje</label>
                        <textarea
                            value={emailBody}
                            onChange={(e) => setEmailBody(e.target.value)}
                            className="w-full bg-gray-900 rounded p-2 mt-1 h-64 resize-y focus:ring-teal-500 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={handleCopy} className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">
                        {copySuccess || 'Copiar Todo'}
                    </button>
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cerrar</button>
                </div>
            </div>
        </div>
    );
};


const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, itemName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-sm">
                <h2 className="text-xl font-bold text-red-400 mb-4">Confirmar Eliminación</h2>
                <p className="text-gray-300">¿Estás seguro de que quieres eliminar el gasto fijo "{itemName}"?</p>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                    <button onClick={onConfirm} className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                </div>
            </div>
        </div>
    );
};

const FileUploadAccordion = ({ companies, onFileSelect, isProcessing, fileNames }) => {
    const [openCompany, setOpenCompany] = React.useState(Object.keys(companies)[0] || null);

    const fileTypes = [
        { id: 'sales', label: 'Ventas', style: 'bg-cyan-800 text-cyan-200 hover:bg-cyan-700' },
        { id: 'purchases', label: 'Compras', style: 'bg-indigo-800 text-indigo-200 hover:bg-indigo-700' },
        { id: 'receivableChecks', label: 'Cheques de Terceros (a cobrar)', style: 'bg-green-800 text-green-200 hover:bg-green-700' },
        { id: 'issuedChecks', label: 'Cheques Propios (a pagar)', style: 'bg-red-800 text-red-200 hover:bg-red-700' },
    ];

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Carga de Datos por Empresa</h3>
            <div className="space-y-2">
                {Object.keys(companies).map(companyName => (
                    <div key={companyName}>
                        <button
                            onClick={() => setOpenCompany(openCompany === companyName ? null : companyName)}
                            className="w-full flex justify-between items-center bg-gray-700 p-3 rounded-md hover:bg-gray-600 transition-colors"
                        >
                            <span className="font-semibold">{companyName}</span>
                            <svg className={`w-5 h-5 transition-transform ${openCompany === companyName ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {openCompany === companyName && (
                            <div className="p-4 bg-gray-900 rounded-b-md grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                {fileTypes.map(type => (
                                    <div key={type.id}>
                                        <label className="text-sm text-gray-400 mb-1 block">{type.label}</label>
                                        <div className="flex items-center gap-2">
                                            <label 
                                                htmlFor={`file-input-${companyName}-${type.id}`}
                                                className={`cursor-pointer text-sm font-semibold py-2 px-4 rounded-full transition-colors whitespace-nowrap ${
                                                    isProcessing ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : type.style
                                                }`}
                                            >
                                                Seleccionar archivo
                                            </label>
                                            <input
                                                id={`file-input-${companyName}-${type.id}`}
                                                type="file"
                                                accept=".csv"
                                                onChange={(e) => onFileSelect(companyName, type.id, e)}
                                                disabled={isProcessing}
                                                className="hidden"
                                            />
                                            <span 
                                                className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap"
                                                title={fileNames?.[companyName]?.[type.id]}
                                            >
                                                {fileNames?.[companyName]?.[type.id] || ""}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


// === COMPONENTE PRINCIPAL DE LA APLICACIÓN ===

export default function App() {
  const [companiesData, setCompaniesData] = React.useState({});
  const [activeCompanies, setActiveCompanies] = React.useState(new Set());
  const [trelloExpenses, setTrelloExpenses] = React.useState([]);
  const [includeTrello, setIncludeTrello] = React.useState(true);
  const [crmSales, setCrmSales] = React.useState([]);
  const [includeCrm, setIncludeCrm] = React.useState(true);
  const [fixedExpenses, setFixedExpenses] = React.useState([]);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = React.useState(false);
  const [expenseToEdit, setExpenseToEdit] = React.useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [expenseToDelete, setExpenseToDelete] = React.useState(null);

  const [projectedCashFlow, setProjectedCashFlow] = React.useState([]);
  const [displayInitialBalance, setDisplayInitialBalance] = React.useState(0);
  const [totalIncome, setTotalIncome] = React.useState(0);
  const [totalOutcome, setTotalOutcome] = React.useState(0);
  const [currentExchangeRate, setCurrentExchangeRate] = React.useState('...');
  const [liveRateValue, setLiveRateValue] = React.useState(null);
  
  const [query, setQuery] = React.useState('');
  const [llmResponse, setLlmResponse] = React.useState('');
  const [isQuerying, setIsQuerying] = React.useState(false);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  
  const [activeTab, setActiveTab] = React.useState('chart');
  const [isProcessingFile, setIsProcessingFile] = React.useState(false);
  const [overdueInvoices, setOverdueInvoices] = React.useState([]);
  const [processedInvoices, setProcessedInvoices] = React.useState([]);
  const [isOverdueModalOpen, setIsOverdueModalOpen] = React.useState(false);
  const [fileError, setFileError] = React.useState('');
  const [fileMessage, setFileMessage] = React.useState('');
  const [shareMessage, setShareMessage] = React.useState('');
  const [uploadedFileNames, setUploadedFileNames] = React.useState({});
  
  const [overdueContext, setOverdueContext] = React.useState({ companyName: null, fileType: null });
  const [isGeneratingEmail, setIsGeneratingEmail] = React.useState(null);
  const [emailDraft, setEmailDraft] = React.useState({ subject: '', body: '', show: false });
  

  // Carga el estado desde la URL o localStorage en el renderizado inicial
  React.useEffect(() => {
    let loadedState = false;
    const urlParams = new URLSearchParams(window.location.search);
    const dataFromUrl = urlParams.get('data');

    const initialStructure = {
        'Grupo H': { initialBalance: 0, sales: [], purchases: [], receivableChecks: [], payableChecks: [] },
        'Hyflon': { initialBalance: 0, sales: [], purchases: [], receivableChecks: [], payableChecks: [] },
        'Tribylab': { initialBalance: 0, sales: [], purchases: [], receivableChecks: [], payableChecks: [] }
    };

    if (dataFromUrl) {
        try {
            const decodedState = JSON.parse(atob(dataFromUrl));
            // Asegurarse de que los datos esenciales existan antes de cargar el estado
            if (decodedState.companiesData && decodedState.activeCompanies) {
                setCompaniesData(decodedState.companiesData);
                setFixedExpenses(decodedState.fixedExpenses || []);
                // Usar el operador de coalescencia nula para manejar correctamente los booleanos
                setIncludeTrello(decodedState.includeTrello ?? true);
                setIncludeCrm(decodedState.includeCrm ?? true);
                setActiveCompanies(new Set(decodedState.activeCompanies));
                setTrelloExpenses(decodedState.trelloExpenses || []);
                setCrmSales(decodedState.crmSales || []);
                setUploadedFileNames(decodedState.uploadedFileNames || {});
                
                loadedState = true;
                // Limpiar la URL para evitar recargar el mismo estado al refrescar
                window.history.replaceState({}, document.title, window.location.pathname);
            } else {
                 console.error("El estado compartido desde la URL no contiene datos esenciales.");
            }
        } catch (error) {
            console.error("Error al cargar el estado compartido desde la URL:", error);
            // Si los datos de la URL están corruptos, se procederá a la carga por defecto
        }
    }

    if (!loadedState) {
        // Inicialización por defecto si no se encuentran datos válidos en la URL
        setCompaniesData(initialStructure);
        setActiveCompanies(new Set(Object.keys(initialStructure)));
        try {
            const savedExpenses = localStorage.getItem('cashFlowApp-fixedExpenses');
            if (savedExpenses) {
                setFixedExpenses(JSON.parse(savedExpenses));
            } else {
                setFixedExpenses([]);
            }
        } catch (error) {
            console.error("Error al cargar gastos fijos desde localStorage", error);
            setFixedExpenses([]);
        }
    }
    
    // Cargar scripts externos dinámicamente
    const scriptUrls = [
        'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
    ];
    scriptUrls.forEach(url => {
        // Evitar añadir scripts duplicados
        if (!document.querySelector(`script[src="${url}"]`)) {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        }
    });

    const fetchLiveOfficialRate = async () => {
        try {
            const response = await fetch('https://criptoya.com/api/dolar');
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.oficial && typeof data.oficial.price === 'number') {
                const fetchedRate = data.oficial.price;
                setLiveRateValue(fetchedRate);
                setCurrentExchangeRate(`$${fetchedRate.toFixed(2)}`);
            } else {
                 throw new Error("Formato de respuesta inesperado o falta 'price' en 'oficial'.");
            }
        } catch (error) {
            console.error("Error al obtener tipo de cambio de CriptoYa, usando valor simulado:", error);
            const today = new Date().toISOString().split('T')[0];
            const rate = await getHistoricalExchangeRate(today);
            setLiveRateValue(rate);
            setCurrentExchangeRate(`$${rate.toFixed(2)} (Simulado)`);
        }
    };
    fetchLiveOfficialRate();

  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  // Guardar gastos fijos en localStorage cada vez que cambian
  React.useEffect(() => {
    try {
        localStorage.setItem('cashFlowApp-fixedExpenses', JSON.stringify(fixedExpenses));
    } catch (error) {
        console.error("Error al guardar gastos fijos en localStorage", error);
    }
  }, [fixedExpenses]);

  React.useEffect(() => {
    if (Object.keys(companiesData).length > 0) {
        calculateCashFlow();
    }
  }, [companiesData, activeCompanies, includeTrello, trelloExpenses, includeCrm, crmSales, fixedExpenses]);
  
  const handleFileSelect = (companyName, fileType, event) => {
      const file = event.target.files[0];
      if (!file || !window.Papa) return;
      
      setUploadedFileNames(prev => ({
          ...prev,
          [companyName]: {
              ...prev[companyName],
              [fileType]: file.name
          }
      }));

      setFileError('');
      setFileMessage('');
      setIsProcessingFile(true);

      const fileConfigs = {
          sales: {
              targetArray: 'receivableChecks',
              dateCol: 'Vencimientodel pago', amountCol: 'Subtotalconceptos s/ivaen moneda original',
              currencyCol: 'Moneda de facturación', statusCol: 'Estado delpago',
              idCol: 'Nro. deComprobante',
              razonSocialCol: 'Razon Social', isInvoice: true, 
              statusCondition: (s) => s.toUpperCase().trim() !== 'PAGADA',
          },
          purchases: {
              targetArray: 'payableChecks',
              dateCol: 'Vencimientodel pago', amountCol: 'Subtotalconceptos s/ivaen moneda original',
              currencyCol: 'Moneda de facturación', statusCol: 'Estado delpago',
              idCol: 'Nro. deComprobante',
              razonSocialCol: 'Razon Social', isInvoice: true, 
              statusCondition: (s) => s.toUpperCase().trim() !== 'PAGADA',
          },
          receivableChecks: {
              targetArray: 'receivableChecks',
              dateCol: 'Fecha de cobro/pago', amountCol: 'Importe',
              statusCol: 'Sigue en cartera?',
              isInvoice: false, statusCondition: (s) => s.toUpperCase().trim() === 'SI',
          },
          issuedChecks: {
              targetArray: 'payableChecks',
              dateCol: 'Fecha de cobro/pago', amountCol: 'Importe',
              statusCol: 'Sigue en cartera?',
              isInvoice: false, statusCondition: (s) => s.toUpperCase().trim() === 'SI',
          },
      };

      const config = fileConfigs[fileType];

      window.Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
              if (results.errors.length > 0) {
                  setFileError(`Error al parsear el archivo de ${fileType}. Verifica el formato.`);
                  setIsProcessingFile(false);
                  return;
              }

              const today = new Date(); today.setHours(0, 0, 0, 0);
              let processedData = [];
              let overdueData = [];
              let processedCount = 0;

              for (const row of results.data) {
                  if (config.statusCol && (!row[config.statusCol] || !config.statusCondition(row[config.statusCol]))) {
                      continue;
                  }
                  if(!row[config.dateCol] || !row[config.amountCol]) {
                      console.warn("Fila ignorada por falta de datos:", row);
                      continue;
                  }

                  let amountUSD = 0;
                  const subtotalAmount = parseAmount(row[config.amountCol]);
                  const currency = row[config.currencyCol];
                  
                  if (currency && currency.toLowerCase().includes('dolares')) {
                      amountUSD = subtotalAmount;
                  } else { // Default to ARS, convert using the live/utilized rate
                      if (liveRateValue) {
                          amountUSD = subtotalAmount / liveRateValue;
                      } else {
                          console.warn("Tipo de cambio en vivo no disponible, conversión no realizada para la fila:", row);
                          continue; // Skip this row if rate is not available
                      }
                  }
                  
                  const dueDate = parseDate(row[config.dateCol]);
                  const entry = { date: dueDate, amount: amountUSD };

                  if (config.isInvoice && dueDate && new Date(dueDate) < today) {
                      overdueData.push({
                          ...entry,
                          factura_id: row[config.idCol],
                          razonSocial: row[config.razonSocialCol],
                          fecha_vencimiento_original: row[config.dateCol],
                          monto_usd: amountUSD,
                      });
                  } else if (dueDate) {
                      processedData.push(entry);
                  }
                  processedCount++;
              }
              
              setOverdueContext({ companyName, fileType, targetArray: config.targetArray });

              if (overdueData.length > 0) {
                  setProcessedInvoices(processedData); 
                  setOverdueInvoices(overdueData);
                  setIsOverdueModalOpen(true);
              } else {
                  updateCompanyData(companyName, config.targetArray, fileType, processedData);
              }

              setFileMessage(`Archivo de ${fileType} para ${companyName} procesado. ${processedCount} registros encontrados.`);
              setIsProcessingFile(false);
          }
      });
      event.target.value = null;
  };
  
  const handleOverdueConfirmation = (newDueDates) => {
      const updatedOverdue = overdueInvoices.map(inv => ({
          date: newDueDates[inv.factura_id],
          amount: inv.monto_usd
      }));
      const { companyName, targetArray, fileType } = overdueContext;
      updateCompanyData(companyName, targetArray, fileType, [...processedInvoices, ...updatedOverdue]);
      setIsOverdueModalOpen(false);
      setOverdueInvoices([]);
      setProcessedInvoices([]);
      setOverdueContext({ companyName: null, fileType: null, targetArray: null });
  };
  
  const updateCompanyData = (companyName, targetArray, source, newData) => {
    setCompaniesData(prev => {
        const newCompanyData = { ...(prev[companyName] || {}) };
        const currentArray = newCompanyData[targetArray] || [];
        const otherData = currentArray.filter(item => item.source !== source);
        
        const taggedNewData = newData.map(item => ({...item, source}));

        newCompanyData[targetArray] = [...otherData, ...taggedNewData];

        return {
            ...prev,
            [companyName]: newCompanyData
        };
    });
  };

  const toggleCompany = (companyName) => {
      setActiveCompanies(prev => {
          const newSet = new Set(prev);
          if (newSet.has(companyName)) newSet.delete(companyName);
          else newSet.add(companyName);
          return newSet;
      });
  };

  const handleUpdateAllBalances = (updatedBalances) => {
    setCompaniesData(prev => {
        const newCompaniesData = { ...prev };
        Object.keys(updatedBalances).forEach(companyName => {
            if (newCompaniesData[companyName]) {
                newCompaniesData[companyName] = {
                    ...newCompaniesData[companyName],
                    initialBalance: updatedBalances[companyName]
                };
            }
        });
        return newCompaniesData;
    });
  };

  const handleSaveFixedExpense = (expense) => {
      const exists = fixedExpenses.some(e => e.id === expense.id);
      if(exists) {
          setFixedExpenses(prev => prev.map(e => e.id === expense.id ? expense : e));
      } else {
          setFixedExpenses(prev => [...prev, expense]);
      }
      setExpenseToEdit(null);
  };
  
  const handleEditExpense = (expense) => {
      setExpenseToEdit(expense);
      setIsExpenseModalOpen(true);
  }
  
  const handleDeleteExpense = (expense) => {
      setExpenseToDelete(expense);
      setIsDeleteModalOpen(true);
  }
  
  const confirmDeleteExpense = () => {
      setFixedExpenses(prev => prev.filter(e => e.id !== expenseToDelete.id));
      setIsDeleteModalOpen(false);
      setExpenseToDelete(null);
  }
  
  const handleShare = () => {
    const sharableState = {
        companiesData,
        fixedExpenses,
        includeTrello,
        includeCrm,
        activeCompanies: Array.from(activeCompanies),
        trelloExpenses,
        crmSales,
        uploadedFileNames,
    };
    try {
        const jsonString = JSON.stringify(sharableState);
        const base64String = btoa(jsonString);
        const shareUrl = `${window.location.origin}${window.location.pathname}?data=${base64String}`;
        
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed"; 
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setShareMessage('¡Enlace copiado!');
        } catch (err) {
            console.error('La copia falló', err);
            setShareMessage('Error al copiar');
        }
        document.body.removeChild(textArea);

        setTimeout(() => setShareMessage(''), 2000);
    } catch (error) {
        console.error("Error al crear el enlace para compartir:", error);
        setShareMessage('Error al crear enlace');
        setTimeout(() => setShareMessage(''), 2000);
    }
  };
  
    const handleGeneratePdf = async () => {
      const { jsPDF } = window.jspdf;
      const html2canvas = window.html2canvas;
      if (!jsPDF || !html2canvas) {
          alert("Las librerías para generar PDF no están cargadas aún.");
          return;
      }
      
      const reportElement = document.createElement('div');
      reportElement.className = 'p-10 bg-white text-black';
      reportElement.style.width = '210mm';
      reportElement.innerHTML = `
          <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #ccc; padding-bottom: 10px;">
                  <img src="${LOGO_DATA_URI}" style="height: 50px;" alt="Logo"/>
                  <div>
                      <h1 style="font-size: 24px; margin: 0;">Informe de Flujo de Caja Proyectado</h1>
                      <p style="text-align: right; margin: 0;">Generado: ${new Date().toLocaleDateString('es-AR')}</p>
                  </div>
              </div>
              <h2 style="font-size: 18px; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Resumen de Métricas</h2>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 15px; text-align: center;">
                  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;"><strong>Saldo Inicial:</strong><br/>${formatCurrency(displayInitialBalance)}</div>
                  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;"><strong>Ingresos:</strong><br/>${formatCurrency(totalIncome)}</div>
                  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;"><strong>Egresos:</strong><br/>${formatCurrency(totalOutcome)}</div>
                  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;"><strong>Neto:</strong><br/>${formatCurrency(totalIncome - totalOutcome)}</div>
              </div>
              <h2 style="font-size: 18px; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Análisis del Asistente IA</h2>
              <div style="margin-top: 15px; font-size: 14px; white-space: pre-wrap; border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">${llmResponse || 'No hay análisis disponible.'}</div>
              <h2 style="font-size: 18px; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Detalle del Flujo de Caja Semanal</h2>
              <table style="width: 100%; margin-top: 15px; border-collapse: collapse; font-size: 12px;">
                  <thead>
                      <tr style="background-color: #f2f2f2;">
                          <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Semana</th>
                          <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Ingresos</th>
                          <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Egresos</th>
                          <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Flujo Neto</th>
                          <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Saldo Acumulado</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${projectedCashFlow.map(row => `
                          <tr>
                              <td style="padding: 8px; border: 1px solid #ddd;">${row.weekLabel}</td>
                              <td style="padding: 8px; border: 1px solid #ddd; text-align: right; color: green;">${formatCurrency(row.inflows)}</td>
                              <td style="padding: 8px; border: 1px solid #ddd; text-align: right; color: red;">${formatCurrency(row.outflows)}</td>
                              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">${formatCurrency(row.netFlow)}</td>
                              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>${formatCurrency(row.balance)}</strong></td>
                          </tr>
                      `).join('')}
                  </tbody>
              </table>
          </div>
      `;
      document.body.appendChild(reportElement);

      const canvas = await html2canvas(reportElement, {scale: 2});
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const pdfImageWidth = pdfWidth;
      const pdfImageHeight = pdfImageWidth / ratio;

      let position = 0;
      let heightLeft = pdfImageHeight;
      
      pdf.addImage(imgData, 'PNG', 0, position, pdfImageWidth, pdfImageHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position -= pdf.internal.pageSize.getHeight();
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfImageWidth, pdfImageHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      
      pdf.save(`Reporte-Flujo-Caja-${new Date().toISOString().split('T')[0]}.pdf`);
      document.body.removeChild(reportElement);
  };
  
  const handleExportExcel = () => {
      if (!window.XLSX) {
          alert("La librería para generar Excel no está cargada aún.");
          return;
      }

      // 1. Hoja de Resumen y Flujo de Caja
      const summaryData = [
          ['Métricas Clave', ''],
          ['Saldo Inicial Consolidado (USD)', displayInitialBalance],
          ['Ingresos Proyectados (USD)', totalIncome],
          ['Egresos Proyectados (USD)', totalOutcome],
          ['Resultado Neto (USD)', { t: 'n', f: 'B3-B4' }], // Formula for Net Result
          ['Tipo de Cambio Utilizado', currentExchangeRate],
          [] // Empty row for spacing
      ];

      const wsCashFlow = window.XLSX.utils.aoa_to_sheet(summaryData);

      const header = ['Semana', 'Rango', 'Ingresos (USD)', 'Egresos (USD)', 'Flujo Neto (USD)', 'Saldo Acumulado (USD)'];
      window.XLSX.utils.sheet_add_aoa(wsCashFlow, [header], { origin: 'A8' });
      
      const cashFlowDataForSheet = projectedCashFlow.map((row, index) => {
          const rowIndex = index + 9; // Excel rows are 1-based, header is on row 8
          return [
              row.weekLabel,
              row.dateRangeLabel.replace(' al ', ' - '),
              row.inflows,
              row.outflows,
              { t: 'n', f: `C${rowIndex}-D${rowIndex}` }, // Formula for Net Flow
              index === 0 
                  ? { t: 'n', f: `B2+E${rowIndex}` } // First balance = Initial Balance + First Net Flow
                  : { t: 'n', f: `F${rowIndex - 1}+E${rowIndex}` } // Subsequent balance = Previous Balance + Current Net Flow
          ];
      });

      window.XLSX.utils.sheet_add_aoa(wsCashFlow, cashFlowDataForSheet, { origin: 'A9' });
      
      // Formatear números
      cashFlowDataForSheet.forEach((_row, index) => {
          const rowIndex = index + 9;
          ['C', 'D', 'E', 'F'].forEach(col => {
              if (wsCashFlow[`${col}${rowIndex}`]) {
                  wsCashFlow[`${col}${rowIndex}`].z = '$#,##0.00';
              }
          });
      });
      [2,3,4,5].forEach(rowIndex => {
          if(wsCashFlow[`B${rowIndex}`]) wsCashFlow[`B${rowIndex}`].z = '$#,##0.00';
      });

      wsCashFlow['!cols'] = [ {wch:30}, {wch:25}, {wch:20}, {wch:20}, {wch:20}, {wch:25} ];

      // 2. Hoja de Simulador de Hipótesis
      const hypothesisData = [
          { Tipo: 'INGRESO', Fecha: 'dd/mm/aaaa', Descripcion: 'Ej: Aporte de capital', 'Monto (USD)': 5000 },
          { Tipo: 'EGRESO', Fecha: 'dd/mm/aaaa', Descripcion: 'Ej: Compra no planificada', 'Monto (USD)': 2000 },
          {},
          { Tipo: 'INSTRUCCIONES:', Descripcion: 'Añada nuevas filas para simular. La columna de monto es siempre positiva, el tipo lo define.'},
      ];
      const wsHypothesis = window.XLSX.utils.json_to_sheet(hypothesisData);
      wsHypothesis['!cols'] = [ {wch:15}, {wch:15}, {wch:60}, {wch:15} ];
      
      const wb = window.XLSX.utils.book_new();
      window.XLSX.utils.book_append_sheet(wb, wsCashFlow, 'Flujo de Caja');
      window.XLSX.utils.book_append_sheet(wb, wsHypothesis, 'Simulador de Hipótesis');
      
      window.XLSX.writeFile(wb, `Escenario_Flujo_Caja_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const calculateCashFlow = () => {
    const combined = { initialBalance: 0, sales: [], purchases: [], receivableChecks: [], payableChecks: [] };
    
    // Define a single, consistent 'today' at the start and zero out its time.
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [, currentWeekNum] = getWeekNumber(today);
    const targetWeek = 49;

    // Calcula dinámicamente las semanas de proyección para llegar hasta la semana 49.
    // Si ya pasó la semana 49, se proyectan 12 semanas por defecto.
    const projectionWeeks = currentWeekNum < targetWeek ? (targetWeek - currentWeekNum) + 1 : 12;


    activeCompanies.forEach(name => {
        const data = companiesData[name];
        if(data) {
            combined.initialBalance += data.initialBalance || 0;
            combined.sales.push(...(data.sales || []));
            combined.purchases.push(...(data.purchases || []));
            combined.receivableChecks.push(...(data.receivableChecks || []));
            combined.payableChecks.push(...(data.payableChecks || []));
        }
    });
    
    if (includeTrello) combined.purchases.push(...trelloExpenses);
    
    if (includeCrm) {
        crmSales.forEach(sale => {
            const saleDate = new Date(sale.date + 'T00:00:00');
            const inflowDate = new Date(saleDate);
            inflowDate.setDate(inflowDate.getDate() + 45);
            combined.receivableChecks.push({ date: inflowDate.toISOString().split('T')[0], amount: sale.amount });
            combined.purchases.push({ date: sale.date, amount: sale.amount * 0.70 });
        });
    }

    const projectionEndDate = new Date(today);
    projectionEndDate.setDate(today.getDate() + projectionWeeks * 7);

    fixedExpenses.forEach(expense => {
        let expenseDate = new Date(expense.startDate + 'T00:00:00');
        while (expenseDate < projectionEndDate) {
            if (expenseDate >= today) {
                let applicableAmount = 0;
                Object.entries(expense.allocations).forEach(([company, percentage]) => {
                    if (activeCompanies.has(company)) {
                        applicableAmount += expense.amount * (percentage / 100);
                    }
                });
                if (applicableAmount > 0) {
                    combined.purchases.push({ date: expenseDate.toISOString().split('T')[0], amount: applicableAmount });
                }
            }
            expenseDate.setMonth(expenseDate.getMonth() + 1);
        }
    });
    
    setDisplayInitialBalance(combined.initialBalance);

    const weeklyData = Array.from({ length: projectionWeeks }, (_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() + i * 7);
        const [year, weekNum] = getWeekNumber(d);
        
        const weekStart = new Date(d);
        const weekEnd = new Date(d);
        weekEnd.setDate(weekEnd.getDate() + 6);
        
        const formatDate = (dt) => `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear().toString().slice(-2)}`;

        return { 
            weekLabel: `Sem ${weekNum} '${year.toString().slice(-2)}`, 
            dateRangeLabel: `${formatDate(weekStart)} al ${formatDate(weekEnd)}`,
            inflows: 0, 
            outflows: 0 
        };
    });

    const processItems = (items, type, dateField) => {
        items.forEach(item => {
            if(!item[dateField]) return;
            const itemDate = new Date(item[dateField] + 'T00:00:00');
            const diffTime = itemDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays >= 0) {
                const weekIndex = Math.floor(diffDays / 7);
                if (weekIndex < projectionWeeks && weeklyData[weekIndex]) {
                    weeklyData[weekIndex][type === 'inflow' ? 'inflows' : 'outflows'] += item.amount;
                }
            }
        });
    };

    // Unificar todas las entradas y salidas para un procesamiento consistente
    // Entradas: vienen de archivos de 'ventas' y 'cheques a cobrar'.
    const allInflows = combined.receivableChecks;
    // Salidas: vienen de archivos de 'compras', 'cheques propios', gastos de CRM y Gastos Fijos.
    const allOutflows = [...combined.purchases, ...combined.payableChecks];

    processItems(allInflows, 'inflow', 'date');
    processItems(allOutflows, 'outflow', 'date');

    let currentBalance = combined.initialBalance;
    let totalIn = 0, totalOut = 0;
    const finalProjection = weeklyData.map(week => {
        const netFlow = week.inflows - week.outflows;
        currentBalance += netFlow;
        totalIn += week.inflows;
        totalOut += week.outflows;
        return { ...week, netFlow, balance: currentBalance };
    });

    setProjectedCashFlow(finalProjection);
    setTotalIncome(totalIn);
    setTotalOutcome(totalOut);
  };

  const callGeminiAPI = async (systemPrompt, userQuery) => {
    // La API Key se leerá desde las variables de entorno
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              contents: [{ parts: [{ text: userQuery }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
      });

      if (!response.ok) throw new Error(`Error en la API: ${response.statusText}`);
      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      return text || "No se pudo procesar la respuesta. Intenta de nuevo.";
    } catch (error) {
        console.error("Error al contactar la API de Gemini:", error);
        return "Hubo un error al conectar con el servicio de análisis. Por favor, revisa la consola.";
    }
  };
  
  const handleQuery = async () => {
      if (!query.trim() || activeCompanies.size === 0) return;
      setIsQuerying(true);
      setLlmResponse('');
      
      const companyList = [...activeCompanies].join(', ');
      const systemPrompt = `Eres un experto analista financiero y de negocios. Responde preguntas sobre un flujo de caja proyectado de las empresas: ${companyList}. Sé claro, conciso y usa formato de dólares (ej: $1,234.56).`;
      const dataContext = JSON.stringify(projectedCashFlow);
      const userQuery = `Basado en los siguientes datos de flujo de caja: ${dataContext}. Responde la siguiente pregunta: "${query}"`;
      
      const response = await callGeminiAPI(systemPrompt, userQuery);
      setLlmResponse(response);
      setIsQuerying(false);
  };

  const handleGenerateAnalysis = async () => {
      if(activeCompanies.size === 0) return;
      setIsAnalyzing(true);
      setLlmResponse('');

      const companyList = [...activeCompanies].join(', ');
      const systemPrompt = `Eres un Director Financiero (CFO) experto en PyMEs argentinas. Tu tarea es analizar un flujo de caja proyectado y proporcionar un resumen ejecutivo claro y accionable en español.

      Tu MÁXIMA prioridad es identificar semanas con saldo final negativo.

      Formato de respuesta OBLIGATORIO:
      1.  Si encuentras semanas con saldo negativo, EMPIEZA con una sección "🚨 ALERTA DE RIESGO". Detalla la semana, el saldo negativo y las causas principales (grandes egresos, bajos ingresos).
      2.  **Resumen Ejecutivo:** Un párrafo sobre la salud financiera general, mencionando saldo final y tendencia.
      3.  **Puntos Clave:** Una lista de viñetas con los 2-3 puntos más importantes (mayores egresos, concentración de ingresos, etc.).
      4.  **✨ Sugerencias Accionables:** Una lista numerada con 3 sugerencias concretas para mejorar la situación, basadas en los datos.

      Siempre que menciones cifras monetarias, usa el formato de dólares estadounidenses (ej: $1,234.56).`;
      const dataContext = JSON.stringify(projectedCashFlow);
      const userQuery = `Analiza los siguientes datos de flujo de caja proyectado para las empresas ${companyList} y genera el reporte como se te indicó. Datos: ${dataContext}.`;

      const response = await callGeminiAPI(systemPrompt, userQuery);
      setLlmResponse(response);
      setIsAnalyzing(false);
  };
  
  const handleGenerateCollectionEmail = async (invoice) => {
    setIsGeneratingEmail(invoice.factura_id);

    const systemPrompt = `Eres un asistente administrativo experto en cobranzas para una PyME en Argentina. Tu tono es profesional, amable pero firme. Redacta un email de cobranza en español. El email debe estar estructurado en ASUNTO y CUERPO. No incluyas "Estimado/a [Nombre del Cliente]", empieza directamente con "Nos ponemos en contacto...".`;
    
    const userQuery = `Redacta un email de cobranza para la factura N° ${invoice.factura_id} de nuestro cliente ${invoice.razonSocial}, por un monto de ${formatCurrency(invoice.monto_usd)}. La fecha de vencimiento original era el ${invoice.fecha_vencimiento_original}. Menciona que la factura se encuentra vencida y solicita una fecha estimada de pago. Finaliza cordialmente. Devuelve la respuesta como un objeto JSON con las claves "subject" y "body".`;
    
    try {
        const responseText = await callGeminiAPI(systemPrompt, userQuery);
        // Clean the response to make sure it's valid JSON
        const jsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsedResponse = JSON.parse(jsonString);
        
        setEmailDraft({
            subject: parsedResponse.subject || 'Recordatorio de Factura Vencida',
            body: parsedResponse.body || 'No se pudo generar el cuerpo del email.',
            show: true
        });

    } catch (error) {
        console.error("Error al parsear la respuesta del email:", error);
        setEmailDraft({
            subject: `Recordatorio de Pago - Factura ${invoice.factura_id}`,
            body: `Estimado cliente,\n\nNos ponemos en contacto para recordarle que la factura N° ${invoice.factura_id} por un importe de ${formatCurrency(invoice.monto_usd)} ha vencido.\n\nAgradeceríamos nos informe una fecha estimada de pago.\n\nSaludos cordiales,`,
            show: true
        });
    } finally {
        setIsGeneratingEmail(null);
    }
  };
  
    const ChartComponent = ({ data, initialBalance }) => {
        if (!data || data.length === 0) {
            return <div className="w-full h-full flex items-center justify-center text-gray-500">Carga datos o ajusta saldos para ver el gráfico.</div>;
        }

        // Incluir el saldo inicial en el cálculo de la escala vertical para asegurar que todo encaje.
        const allValues = data.flatMap(d => [Math.abs(d.netFlow), Math.abs(d.balance)]).concat(Math.abs(initialBalance));
        const maxAbsValue = Math.max(...allValues, 1);

        // Calcular el punto de partida de la línea (Saldo Inicial) en el borde izquierdo del gráfico.
        const initialYPercent = 50 + (initialBalance / maxAbsValue) * 50;
        const initialY = 100 - Math.max(0, Math.min(100, initialYPercent));
        const initialPoint = `0,${initialY}`;

        const weekWidth = 100 / data.length;

        // Calcular los puntos siguientes para que se alineen con el CENTRO de cada barra semanal.
        const subsequentPoints = data.map((d, index) => {
            const x = weekWidth * (index + 0.5); // Centrar el punto en la columna de la semana
            const yPercent = 50 + (d.balance / maxAbsValue) * 50;
            const y = 100 - Math.max(0, Math.min(100, yPercent));
            return `${x},${y}`;
        }).join(' ');
        
        const linePoints = `${initialPoint} ${subsequentPoints}`;

        return (
            <div className="w-full h-full flex flex-col justify-end">
                <div className="relative flex justify-around items-center h-full">
                    {/* Zero Axis Line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-600 z-0"></div>
                    
                    {/* SVG for Balance Line */}
                    <svg width="100%" height="100%" className="absolute top-0 left-0 overflow-visible">
                      <polyline
                        points={linePoints}
                        fill="none"
                        stroke="#22d3ee" // cyan-400
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    {/* Bars and Tooltips */}
                    {data.map((d, index) => {
                        const barHeight = (Math.abs(d.netFlow) / maxAbsValue) * 50;

                        return (
                            <div key={index} className="flex flex-col items-center group w-1/12 h-full justify-center relative">
                                {/* Net Flow Bar */}
                                <div
                                    className={`w-full absolute left-0 rounded-sm ${d.netFlow >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                                    style={{ height: `${barHeight}%`, ...(d.netFlow >= 0 ? { bottom: '50%' } : { top: '50%' }) }}
                                ></div>
                                
                                {/* Tooltip Trigger Area */}
                                <div className="absolute w-full h-full z-20">
                                   {/* Tooltip Content */}
                                   <div className="absolute bottom-full mb-2 w-48 bg-gray-700 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                                        <p><strong>Neto:</strong> <span className={d.netFlow >= 0 ? 'text-green-400' : 'text-red-400'}>{formatCurrency(d.netFlow)}</span></p>
                                        <p><strong>Saldo:</strong> <span className="text-cyan-400">{formatCurrency(d.balance)}</span></p>
                                    </div>
                                </div>
                                
                                {/* Week Labels */}
                                <div className="absolute -bottom-14 text-center">
                                    <span className="text-xs text-gray-400 block">{d.weekLabel}</span>
                                    {d.dateRangeLabel.split(' al ').map((datePart, i) => (
                                        <span key={i} className="text-[10px] text-gray-500 block whitespace-nowrap">{datePart}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="border-t border-gray-700 mt-16 pt-2 flex justify-center text-xs text-gray-400">
                    <span className="mr-4 flex items-center"><div className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></div>Flujo Neto Positivo</span>
                    <span className="mr-4 flex items-center"><div className="w-3 h-3 bg-red-500 mr-2 rounded-sm"></div>Flujo Neto Negativo</span>
                    <span className="flex items-center"><div className="w-2 h-0.5 bg-cyan-400 mr-2"></div>Línea de Saldo</span>
                </div>
            </div>
        );
    };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex justify-between items-center pb-4 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <img src={LOGO_DATA_URI} alt="Logo Grupo H" className="h-12"/>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">Sistema Interactivo de Flujo de Caja</h1>
              <p className="text-gray-400 text-sm sm:text-base">Analiza, proyecta y toma decisiones financieras.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
                onClick={handleExportExcel}
                className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                title="Exportar a Excel"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM4 8h5v2H4V8zm0-3h12a1 1 0 011 1v1H3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </button>
            <button
                onClick={handleGeneratePdf}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                title="Generar Informe en PDF"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2zm-5-8a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm1 4a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
            </button>
            <button
                onClick={handleShare}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors relative"
                title="Compartir Escenario"
            >
              {shareMessage ? shareMessage : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
              )}
            </button>
          </div>
        </header>

        <CompanySelector companies={companiesData} activeCompanies={activeCompanies} toggleCompany={toggleCompany} />
        <InitialBalanceManager companiesData={companiesData} onUpdateAllBalances={handleUpdateAllBalances} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ScenarioToggle title="Gastos Proyectados (Trello)" description="Incluir gastos potenciales." isActive={includeTrello} onToggle={() => setIncludeTrello(!includeTrello)} />
            <ScenarioToggle title="Ventas Proyectadas (Odoo)" description="Incluir ventas probables del CRM." isActive={includeCrm} onToggle={() => setIncludeCrm(!includeCrm)} />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
                 <h3 className="text-lg font-semibold text-gray-300">Gestión de Gastos Fijos</h3>
                 <div className="text-sm text-gray-400 space-y-2 mt-2 max-h-32 overflow-y-auto pr-2">
                    {fixedExpenses.length > 0 ? fixedExpenses.map(exp => (
                        <div key={exp.id} className="flex justify-between items-center bg-gray-900 p-2 rounded">
                            <div>
                                <span className="font-semibold">{exp.description}</span>
                                <span className="block text-xs text-gray-500">{formatCurrency(exp.amount)} / mes</span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEditExpense(exp)} className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold">EDITAR</button>
                                <button onClick={() => handleDeleteExpense(exp)} className="text-red-400 hover:text-red-300 text-xs font-semibold">BORRAR</button>
                            </div>
                        </div>
                    )) : <p className="text-gray-500 text-center py-4">No hay gastos fijos añadidos.</p>}
                 </div>
                 <button onClick={() => { setExpenseToEdit(null); setIsExpenseModalOpen(true); }} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-3 rounded-lg text-sm mt-3 w-full">Añadir Gasto Fijo</button>
            </div>
            <div className="row-span-2">
                <FileUploadAccordion 
                    companies={companiesData} 
                    onFileSelect={handleFileSelect}
                    isProcessing={isProcessingFile}
                    fileNames={uploadedFileNames}
                />
                 {isProcessingFile && <p className="text-sm text-cyan-400 mt-2 animate-pulse">Procesando archivo...</p>}
                 {fileError && <p className="text-sm text-red-400 mt-2">{fileError}</p>}
                 {fileMessage && <p className="text-sm text-green-400 mt-2">{fileMessage}</p>}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            <StatCard title="Saldo Inicial Consolidado" value={formatCurrency(displayInitialBalance)} />
            <StatCard title="Ingresos Proyectados" value={formatCurrency(totalIncome)} color="text-green-400" />
            <StatCard title="Egresos Proyectados" value={formatCurrency(totalOutcome)} color="text-red-400" />
            <StatCard title="Resultado Neto" value={formatCurrency(totalIncome - totalOutcome)} color={(totalIncome - totalOutcome) >= 0 ? 'text-green-400' : 'text-red-400'}/>
            <StatCard title="Tipo de cambio utilizado" value={currentExchangeRate} color="text-cyan-400" />
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-2xl">
              <div className="flex border-b border-gray-700 mb-4">
                  <button onClick={() => setActiveTab('chart')} className={`py-2 px-4 font-semibold ${activeTab === 'chart' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}>Gráfico</button>
                  <button onClick={() => setActiveTab('table')} className={`py-2 px-4 font-semibold ${activeTab === 'table' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}>Tabla</button>
              </div>
              
              {activeTab === 'chart' ? (
                <div className="h-96 w-full">
                     <ChartComponent data={projectedCashFlow} initialBalance={displayInitialBalance} />
                </div>
              ) : (
                <div className="overflow-x-auto h-96">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800 sticky top-0">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Semana</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ingresos</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Egresos</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Flujo Neto</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Saldo Acumulado</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900 divide-y divide-gray-800">
                            {projectedCashFlow.length > 0 ? projectedCashFlow.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-800">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{data.weekLabel}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">{formatCurrency(data.inflows)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">{formatCurrency(data.outflows)}</td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${data.netFlow >= 0 ? 'text-green-400' : 'text-red-400'}`}>{formatCurrency(data.netFlow)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-cyan-400">{formatCurrency(data.balance)}</td>
                                </tr>
                            )) : <tr><td colSpan="5" className="text-center py-10 text-gray-500">No hay datos para mostrar.</td></tr>}
                        </tbody>
                    </table>
                </div>
              )}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-2xl flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Asistente Financiero IA</h2>
             <button
              onClick={handleGenerateAnalysis}
              disabled={isQuerying || isAnalyzing || activeCompanies.size === 0}
              className="w-full mb-4 bg-teal-600 hover:bg-teal-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
            >
              {isAnalyzing ? 'Analizando...' : '✨ Generar Análisis y Sugerencias'}
            </button>
            <p className="text-gray-400 mb-4 text-sm text-center">--- o haz una pregunta específica ---</p>
            <textarea
              className="w-full bg-gray-900 rounded-md p-3 mb-4 h-24 resize-none focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Ej: ¿Cuál será la semana con el saldo más bajo?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isQuerying || isAnalyzing}
            />
            <button
              onClick={handleQuery}
              disabled={isQuerying || isAnalyzing || activeCompanies.size === 0}
              className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-300 text-white font-bold py-2 px-4 rounded-lg"
            >
              {isQuerying ? 'Consultando...' : 'Preguntar al Asistente'}
            </button>
            <div className="mt-4 border-t border-gray-700 pt-4 flex-grow">
              <h3 className="font-semibold text-gray-300 mb-2">Respuesta del Asistente:</h3>
              {(isQuerying || isAnalyzing) ? (
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                </div>
              ) : (
                <p className="text-gray-300 text-sm whitespace-pre-wrap">{llmResponse || "Aquí aparecerá la respuesta..."}</p>
              )}
            </div>
          </div>
        </main>
        
        <AddFixedExpenseModal 
            isOpen={isExpenseModalOpen} 
            onClose={() => setIsExpenseModalOpen(false)} 
            onSave={handleSaveFixedExpense} 
            companies={companiesData}
            expenseToEdit={expenseToEdit} 
        />
        <OverdueInvoicesModal 
            isOpen={isOverdueModalOpen} 
            onClose={() => setIsOverdueModalOpen(false)} 
            onConfirm={handleOverdueConfirmation} 
            invoices={overdueInvoices}
            onGenerateEmail={handleGenerateCollectionEmail}
            isGeneratingEmail={isGeneratingEmail}
        />
        <EmailDraftModal 
            isOpen={emailDraft.show}
            onClose={() => setEmailDraft({ subject: '', body: '', show: false })}
            subject={emailDraft.subject}
            body={emailDraft.body}
        />
        <DeleteConfirmationModal 
            isOpen={isDeleteModalOpen} 
            onClose={() => setIsDeleteModalOpen(false)} 
            onConfirm={confirmDeleteExpense}
            itemName={expenseToDelete?.description}
        />

      </div>
    </div>
  );
}

